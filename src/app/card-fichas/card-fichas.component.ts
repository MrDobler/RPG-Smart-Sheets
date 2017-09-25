import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-fichas',
  templateUrl: './card-fichas.component.html',
  styleUrls: ['./card-fichas.component.css']
})
export class CardFichasComponent implements OnInit {

  cardFicha = [
    {
      titulo: 'Ficha Pathfinder',
      acao: 'Abrir Ficha',
      imagem: '/assets/img/pathfinder.png',
      link: '../fichaPathfinder'
    },
    {
      titulo: 'Ficha Dungeons and Dragons 5',
      acao: 'Abrir Ficha',
      imagem: '/assets/img/d&d.jpg',
      link: '../ficha'
    }
  ];


  constructor() { }

  ngOnInit() {

  }

}
