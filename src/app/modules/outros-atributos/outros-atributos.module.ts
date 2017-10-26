import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeslocamentoComponent } from './deslocamento/deslocamento.component';
import { ArmasComponent } from './armas/armas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeslocamentoComponent,
    ArmasComponent
  ],
  exports: [
    DeslocamentoComponent,
    ArmasComponent
  ],
})
export class OutrosAtributosModule { }
