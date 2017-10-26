import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveFortitudeComponent } from './save-fortitude/save-fortitude.component';
import { SaveReflexoComponent } from './save-reflexo/save-reflexo.component';
import { SaveVontadeComponent } from './save-vontade/save-vontade.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SaveFortitudeComponent,
    SaveReflexoComponent,
    SaveVontadeComponent
  ],
  exports: [
    SaveVontadeComponent,
    SaveFortitudeComponent,
    SaveReflexoComponent
  ],
  providers: []
})
export class SavingThrowModule { }
