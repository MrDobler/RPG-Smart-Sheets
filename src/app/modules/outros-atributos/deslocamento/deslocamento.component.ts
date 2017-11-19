import { Component, OnInit } from '@angular/core';
import { Deslocamento } from './deslocamento';

@Component({
  selector: 'app-deslocamento',
  templateUrl: './deslocamento.component.html',
  styleUrls: ['./deslocamento.component.css']
})
export class DeslocamentoComponent implements OnInit {

  public desabilitado = false;

  public deslocamento = new Deslocamento();

  constructor() { }

  ngOnInit() {
    this.deslocamento.deslocArmadura = 2;
  }

}
