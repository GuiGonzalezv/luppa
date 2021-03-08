import {Documentos} from 'src/models/Documentos'

export class Analise {
    public readonly analysisId: number;
    public fullName: string;
    public cpf: string;
    public analyzedAt: Date|null;
    public documentos: Documentos[]

    constructor(props: Omit<Analise, 'analysisId'>, analysisId?: number) {
      Object.assign(this, props)
    }
}
