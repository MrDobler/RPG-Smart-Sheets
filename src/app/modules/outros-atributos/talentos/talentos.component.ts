import { Component, OnInit, Input } from '@angular/core';

import { Talento } from './talento';

@Component({
  selector: 'app-talentos',
  templateUrl: './talentos.component.html',
  styleUrls: ['./talentos.component.css']
})

export class TalentosComponent implements OnInit {

  public talento = new Talento();

  @Input() talentos = [
    {
       nome: 'Nado',
       descricao: 'Habilidade de Nadar'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  addTalento(talento: Talento): void {

    if (talento.isValid()) {
      let valorTalento = Object.assign({}, talento);
      this.talentos.push(valorTalento);
      this.talento = new Talento();
    }
  }
}
