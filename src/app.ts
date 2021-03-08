import express from 'express'
import cors from 'cors'
import {Connection, createConnection} from 'typeorm'
import nodeCron from 'node-cron'

import {router} from './routes'
import {AnalyseDocuments} from './useCases/AnalyseDocuments'

class App {
    public express: express.Application
    public db: Connection

    public constructor() {
      this.express = express()
      this.middlewares()
      this.routes()
      this.database()
      this.routines()
    }

    private middlewares(): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private async database(): Promise<void> {
      this.db = await createConnection()
    }

    private routes(): void {
      this.express.use(router)
    }

    private routines(): void {
      nodeCron.schedule('*/1 * * * *', async() => {
        console.log(' =========== Analyse Documents Routine ============ ')
        await AnalyseDocuments.execute()
        console.log(' =========== End Routine ============ ')
      })
    }
}

export default new App()
