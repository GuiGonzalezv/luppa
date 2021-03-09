import {PgAnalysisRepository} from '../../repositories/implementations/PgAnalysisRepository'
import {CreateAnalysisCase} from './createAnalysisCase'
import {CreateAnalysisController} from './createAnalysisController'

const postgresAnalysisRepository = new PgAnalysisRepository()

const createAnalysisCase = new CreateAnalysisCase(postgresAnalysisRepository)

const createAnalysisController = new CreateAnalysisController(createAnalysisCase)

export {createAnalysisCase, createAnalysisController}
