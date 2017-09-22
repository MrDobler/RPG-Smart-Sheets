import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = [
    {
      titulo: 'Crie sua ficha',
      descricao: 'Comece agora a agilizar suas partidas de RPG!',
      acao: 'Criar ficha',
      imagem: '/assets/img/ficha_tela_principal.jpg',
      link: '../fichas'
    },
    {
      titulo: 'Agilize o trabalho do mestre',
      descricao: 'Sabemos que ser mestre demanda muito trabalho, tenha acesso direto as fichas de PCs e PMs!',
      acao: 'Comece a mestrar',
      imagem: '/assets/img/dm_img.png',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
