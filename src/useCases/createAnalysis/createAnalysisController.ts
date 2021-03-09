import {Request, Response} from 'express'
import {CreateAnalysisCase} from './createAnalysisCase'

export class CreateAnalysisController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
        private createAnalysisCase: CreateAnalysisCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {fullName, cpf, documentos} = request.body
    const analyzedAt = null

    try {
      const result = await this.createAnalysisCase.execute({fullName, cpf, analyzedAt, documentos})

      return response.status(201).json({analysisId: result.analysisId})
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error'
      })
    }
  }
}
