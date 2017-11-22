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

  addEquipamento(equipamento: Equipamento): void {
      if (equipamento.isValid()) {
        let valorEquipamento = Object.assign({}, equipamento);
        this.equipamentos.push(valorEquipamento);
        this.equipamento = new Equipamento();
      }
  }
}
