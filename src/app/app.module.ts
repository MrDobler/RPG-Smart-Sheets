import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app.routing';
import { FichasComponent } from './components/fichas/fichas.component';
import { CardsComponent } from './components/cards/cards.component';
import { FichacompletaComponent } from './components/fichacompleta/fichacompleta.component';
import { FichaPathfinderComponent } from './components/ficha-pathfinder/ficha-pathfinder.component';
import { CardFichasComponent } from './components/card-fichas/card-fichas.component';
import { AttrPrimariosComponent } from './components/attr-primarios/attr-primarios.component';
import { AttrDesComponent } from './components/attr-des/attr-des.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';
import { AttrConComponent } from './components/attr-con/attr-con.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    HeaderComponent,
    LoginComponent,
    FichasComponent,
    CardsComponent,
    FichacompletaComponent,
    FichaPathfinderComponent,
    CardFichasComponent,
    AttrPrimariosComponent,
    AttrDesComponent,
    ModalLoginComponent,
    ModalCadastroComponent,
    AttrConComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
