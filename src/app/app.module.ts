import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { FichasComponent } from './fichas/fichas.component';
import { CardsComponent } from './cards/cards.component';
import { FichacompletaComponent } from './fichacompleta/fichacompleta.component';
import { FichaPathfinderComponent } from './ficha-pathfinder/ficha-pathfinder.component';
import { CardFichasComponent } from './card-fichas/card-fichas.component';

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
    CardFichasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
