import {PgAnalysisRepository} from '../../repositories/implementations/PgAnalysisRepository'
import {GetAnalysisUseCase} from './getAnalysisUseCase'
import {GetAnalysisController} from './getAnalysisController'

const postgresAnalysisRepository = new PgAnalysisRepository()

const analysisUseCase = new GetAnalysisUseCase(postgresAnalysisRepository)

const getAnalysisController = new GetAnalysisController(analysisUseCase)

export {analysisUseCase, getAnalysisController}
