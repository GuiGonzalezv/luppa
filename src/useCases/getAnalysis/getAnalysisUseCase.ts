import {Analise} from 'src/models/Analise'
import {IAnalysisRepository} from 'src/repositories/IAnalysisRepository'

export class GetAnalysisUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private analysisRepository: IAnalysisRepository
  ) {}

  async execute(analysisId?: number|string): Promise<Analise[]|Analise> {
    if (analysisId) {
      const response = await this.analysisRepository.getById(analysisId)
      if (response === undefined) {
        throw new Error('Análise não encontrada!')
      }
      return response
    }

    return await this.analysisRepository.get()
  }
}
