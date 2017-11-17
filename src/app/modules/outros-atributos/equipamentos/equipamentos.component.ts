import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {

  equipamentos = [
    {
      nome : 'Espada Bastarda',
      peso : 10.0
    }
  ];

  constructor() { }

  ngOnInit() {}

  addEquipamento(equipamentos) {
    this.equipamentos.push(equipamentos.nome, equipamentos.peso);
  }
}
