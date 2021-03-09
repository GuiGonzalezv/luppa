import {Router} from 'express'
import {createAnalysisController} from './useCases/createAnalysis'
import {getAnalysisController} from './useCases/getAnalysis'

const router = Router()

router.post('/analysis', async(req, res) => {
  await createAnalysisController.handle(req, res)
})

router.get('/analysis/', async(req, res) => {
  await getAnalysisController.handle(req, res)
})

router.get('/analysis/:id', async(req, res) => {
  await getAnalysisController.handle(req, res)
})
export {router}
