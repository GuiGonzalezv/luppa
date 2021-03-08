import {IAnalysisRepository} from 'src/repositories/IAnalysisRepository'

export class AnalyseDocumetsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private analysisRepository: IAnalysisRepository
  ) {}

  async execute() :Promise<void> {
    await this.analysisRepository.updateForRoutine()
  }
}
