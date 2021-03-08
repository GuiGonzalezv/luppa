import {Documentos} from './Documentos'

import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

@Entity()
export class Analise {
    @PrimaryGeneratedColumn()
    analysisId: number;

    @Column()
    fullName: string;

    @Column()
    cpf: string;

    @Column({nullable: true, type: 'timestamp'})
    analyzedAt: Date;

    @OneToMany(() => Documentos, doc => doc.analise, {eager: true})
    documentos: Documentos[];

    constructor(props: Omit<Analise, 'analysisId'>, analysisId?: number) {
      Object.assign(this, props)
    }
}
