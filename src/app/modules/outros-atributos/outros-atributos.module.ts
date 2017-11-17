import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeslocamentoComponent } from './deslocamento/deslocamento.component';
import { ArmasComponent } from './armas/armas.component';
import { PericiasComponent } from './pericias/pericias.component';
import { MagiasComponent } from './magias/magias.component';
import { TalentosComponent } from './talentos/talentos.component';
import { HabilidadesEspeciaisComponent } from './habilidades-especiais/habilidades-especiais.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DeslocamentoComponent,
        ArmasComponent,
        PericiasComponent,
        MagiasComponent,
        TalentosComponent,
        HabilidadesEspeciaisComponent,
        EquipamentosComponent
    ],
    exports: [
        DeslocamentoComponent,
        ArmasComponent,
        PericiasComponent,
        MagiasComponent,
        TalentosComponent,
        HabilidadesEspeciaisComponent,
        EquipamentosComponent
    ],
})
export class OutrosAtributosModule { }
