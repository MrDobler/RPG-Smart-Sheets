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
      link: '../ficha-pathfinder'
    },
    {
      titulo: 'Ficha Dungeons and Dragons 5',
      acao: 'Abrir Ficha',
      imagem: '/assets/img/d&d.jpg',
      link: '../ficha-d-and-d'
    },
    {
      titulo: 'Call of Cthulhu',
      acao: 'Abrir Ficha',
      imagem: '/assets/img/call_of_cthulhu.jpg',
      link: '../ficha-call-of-cthulhu'
    }
  ];


  constructor() { }

  ngOnInit() {

  }

}
