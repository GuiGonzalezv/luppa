import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import {Analise} from './Analise'

@Entity()
export class Documentos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    status: string;

    @Column()
    src: string;

    @ManyToOne(() => Analise, analise => analise.documentos)
    analise: Analise;

    constructor(props: Omit<Documentos, 'id'>, id?: number) {
      Object.assign(this, props)
    }
}
