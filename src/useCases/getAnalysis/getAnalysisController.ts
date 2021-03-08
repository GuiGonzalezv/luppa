import {Request, Response} from 'express'
import {GetAnalysisUseCase} from './getAnalysisUseCase'

export class GetAnalysisController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
        private getAnalysisUseCase: GetAnalysisUseCase
  ) {}

  async handle(request:Request, response: Response): Promise<Response> {
    const {id} = request.params

    try {
      const result = await this.getAnalysisUseCase.execute(id)
      return response.status(201).json(result)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error'
      })
    }
  }
}
