import {Documentos} from 'src/models/Documentos'

export interface IcreateAnalysisRequestDTO {
    fullName: string;
    cpf: string;
    analyzedAt: Date|null;
    documentos: Documentos[]
}
