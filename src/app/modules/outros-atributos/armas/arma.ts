export class Arma {
  public nome: string;
  public bonus: number;
  public critico: number;
  public tipo: string;
  public alcance: number;
  public municao: string;
  public dano: string;

  public isValid(): boolean {
      let nomeValido: boolean = this.nome.trim() !== '' && typeof this.nome === 'string';
      let bonusValido: boolean = typeof this.bonus === 'number';
      let criticoValido: boolean = typeof this.critico === 'number';
      let tipoValido: boolean = this.tipo.trim() !== '' && typeof this.tipo === 'string';
      let alcanceValido: boolean = typeof this.alcance === 'number';
      let danoValido: boolean = this.dano.trim() !== '' && typeof this.dano === 'string';

      return nomeValido && bonusValido && criticoValido && tipoValido && alcanceValido && danoValido;
  }
}
