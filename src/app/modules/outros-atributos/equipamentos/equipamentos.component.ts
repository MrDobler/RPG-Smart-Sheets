import { Component, OnInit, Input } from '@angular/core';
import { Equipamento } from './equipamento';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {
  public equipamento = new Equipamento();

  @Input() equipamentos = [
    {
      nome : 'Corda',
      peso : 2.0
    }
  ];

  constructor() { }

  ngOnInit() {}

  addEquipamento(equipamento) {
      if (!this.isEmptyObject(equipamento) && !this.startsWithSpace(equipamento)) {
        let valorEquipamento = Object.assign({}, equipamento);
        this.equipamentos.push(valorEquipamento);
        this.equipamento = new Equipamento();
      }
  }

  startsWithSpace(obj) {
    for(let prop in obj) {
        return (obj.prop.chatAt(0) === ' ');
    }
  }

  isEmptyObject(obj) {
    for(let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
  }
}
