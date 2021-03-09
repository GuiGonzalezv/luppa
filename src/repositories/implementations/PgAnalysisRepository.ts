import {IAnalysisRepository} from '../IAnalysisRepository'
import app from '../../app'
import {Analise} from '../../database/entity/Analise'
import {Documentos} from '../../database/entity/Documentos'

export class PgAnalysisRepository implements IAnalysisRepository {
  async save(analysis: Analise): Promise<Analise> {
    if (analysis.documentos && analysis.documentos.length > 0) {
      const newDocs = []
      for (const doc of analysis.documentos) {
        const document = new Documentos(doc)
        await app.db.getRepository(Documentos).save(document)
        newDocs.push(document)
      }
      analysis.documentos = newDocs
    }
    const saved = await app.db.getRepository(Analise).save(analysis)
    return saved
  }

  async get(): Promise<Analise[]> {
    return await app.db.getRepository(Analise).find()
  }

  async getById(analysisId: number|string): Promise<Analise|undefined> {
    return await app.db.getRepository(Analise).findOne({where: {analysisId: analysisId}})
  }

  async updateForRoutine(): Promise<void> {
    const analises = await app.db.getRepository(Analise).find()

    if (!analises) {
      console.log('Nenhum documento pendente')
      return
    }

    const status = ['fraud', 'valid', 'error']
    for (const analise of analises) {
      for (const doc of analise.documentos) {
        if (doc.status === null) {
          console.log('Documento não validado encontrado, ID: ', doc.id)
          doc.status = status[Math.floor(Math.random() * status.length)]
          console.log('Novo status: ', doc.status)
          console.log(doc)
          await app.db.getRepository(Documentos).save(doc)
        }
      }

      analise.analyzedAt = new Date()
      await app.db.getRepository(Analise).save(analise)
    }
  }
}
