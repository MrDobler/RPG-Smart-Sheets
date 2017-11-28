
export class Talento {

    public id: number;
    public nome: string;
    public descricao: string;

    constructor() {

        this.id = null;
        this.nome = '';
        this.descricao = '';
    }

    public isValid() {

        let nomeValido = this.nome.trim() !== '' && typeof this.nome === 'string';
        let descricaoValida = this.descricao.trim() !== '' && typeof this.descricao === 'string';

        return nomeValido && descricaoValida;
    }
}
