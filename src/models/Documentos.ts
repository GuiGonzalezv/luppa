export class Documentos {
    public readonly id: number;
    public status: string;
    public src: string;

    constructor(props: Omit<Documentos, 'id'>, id?: number) {
      Object.assign(this, props)
    }
}
