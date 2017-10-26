import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { HeaderComponent } from './components/header/header.component';
import { routing } from './app.routing';
import { FichasComponent } from './components/fichas/fichas.component';
import { CardsComponent } from './components/cards/cards.component';
import { FichaPathfinderComponent } from './components/ficha-pathfinder/ficha-pathfinder.component';
import { CardFichasComponent } from './components/card-fichas/card-fichas.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';
import { AtributosModule } from './modules/atributos/atributos.module';
import { SavingThrowModule } from './modules/saving-throw/saving-throw.module';
import { OutrosAtributosModule } from './modules/outros-atributos/outros-atributos.module';

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    HeaderComponent,
    FichasComponent,
    CardsComponent,
    FichaPathfinderComponent,
    CardFichasComponent,
    ModalLoginComponent,
    ModalCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AtributosModule,
    SavingThrowModule,
    OutrosAtributosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
