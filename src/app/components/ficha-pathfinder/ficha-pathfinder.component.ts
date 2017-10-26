import { OutrosAtributosModule } from './../../modules/outros-atributos/outros-atributos.module';
import { Arma } from '../../modules/outros-atributos/armas/arma';
import { FichaPathfinder } from './fichaPathfinder';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ficha-pathfinder',
  templateUrl: './ficha-pathfinder.component.html',
  styleUrls: ['./ficha-pathfinder.component.css']
})
export class FichaPathfinderComponent implements OnInit {

  public arma = new Arma();
  public ficha = new FichaPathfinder();
  public desabilitado = false;
  public trocaContexto = 1;

  constructor() {}


  ngOnInit() {
    this.ficha.playerCharName = 'Nome qualquer';
    this.desabilitado = true;
  }

}
