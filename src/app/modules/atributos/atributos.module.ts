import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrCarComponent } from '../atributos/attr-car/attr-car.component';
import { AttrConComponent } from '../atributos/attr-con/attr-con.component';
import { AttrForComponent } from '../atributos/attr-for/attr-for.component';
import { AttrDesComponent } from '../atributos/attr-des/attr-des.component';
import { AttrIntComponent } from '../atributos/attr-int/attr-int.component';
import { AttrSabComponent } from '../atributos/attr-sab/attr-sab.component';
import { ClasseArmaduraComponent } from './classe-armadura/classe-armadura.component';

@NgModule({
  declarations: [
    AttrCarComponent,
    AttrConComponent,
    AttrDesComponent,
    AttrForComponent,
    AttrIntComponent,
    AttrSabComponent,
    ClasseArmaduraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttrCarComponent,
    AttrConComponent,
    AttrDesComponent,
    AttrForComponent,
    AttrIntComponent,
    AttrSabComponent,
    ClasseArmaduraComponent
  ],
  providers: []
})

export class AtributosModule { }
