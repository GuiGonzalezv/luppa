import {Analise} from 'src/models/Analise'

export interface IAnalysisRepository {
    save(analysis: Analise): Promise<Analise>
    get(): Promise<Analise[]>
    getById(analysisId: number|string): Promise<Analise|undefined>
    updateForRoutine(): Promise<void>
}
