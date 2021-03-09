import {PgAnalysisRepository} from '../../repositories/implementations/PgAnalysisRepository'
import {AnalyseDocumetsUseCase} from './AnalyseDocumentsUseCase'

const postgresAnalysisRepository = new PgAnalysisRepository()

const AnalyseDocuments = new AnalyseDocumetsUseCase(postgresAnalysisRepository)

export {AnalyseDocuments}
