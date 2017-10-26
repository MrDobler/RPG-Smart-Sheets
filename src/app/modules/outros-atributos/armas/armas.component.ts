import { Arma } from './../armas/arma';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {

@Input() public arma = new Arma();

  constructor() {
    this.arma.nome = 'Espada Bastarda';
    this.arma.bonus = 2;
    this.arma.critico = 'x2';
    this.arma.tipo = 'Espada Larga';
    this.arma.alcance = 5;
    this.arma.municao = '';
    this.arma.dano = '2d6';
  }

  ngOnInit() {

  }
}
