import { ArmasComponent } from './armas/armas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeslocamentoComponent } from './deslocamento/deslocamento.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeslocamentoComponent,
    ArmasComponent
  ]
})
export class OutrosAtributosModule { }
