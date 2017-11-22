export class Equipamento {

    public nome: string;
    public peso: number;

    public isValid(): boolean {
        let nomeValido = this.nome.trim() !== '' && typeof this.nome === 'string';
        let pesoValido = typeof this.peso === 'number';

        return nomeValido && pesoValido;
    }
}
