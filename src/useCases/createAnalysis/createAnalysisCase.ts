import {Analise} from '../../models/Analise'
import {IAnalysisRepository} from 'src/repositories/IAnalysisRepository'
import {IcreateAnalysisRequestDTO} from './createAnalysisDTO'

export class CreateAnalysisCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private analysisRepository: IAnalysisRepository
  ) {}

  async execute(data: IcreateAnalysisRequestDTO): Promise<Analise> {
    const Analisy = new Analise(data)

    return await this.analysisRepository.save(Analisy)
  }
}
