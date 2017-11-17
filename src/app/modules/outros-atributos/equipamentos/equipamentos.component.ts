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
      nome : 'Espada Bastarda',
      peso : 10.0
    }
  ];

  constructor() { }

  ngOnInit() {}

  addEquipamento(equipamento) {
      let cloneEquipamento = Object.assign({}, equipamento);
      this.equipamentos.push(cloneEquipamento);
      this.equipamento = new Equipamento();
  }
}
