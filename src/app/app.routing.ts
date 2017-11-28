import { FichaPathfinderComponent } from './components/ficha-pathfinder/ficha-pathfinder.component';
import { FichasComponent } from './components/fichas/fichas.component';
import { Routes, RouterModule } from '@angular/router';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';



const APP_ROUTES: Routes = [
  { path: '', component: TelaPrincipalComponent},
  { path: 'fichas', component: FichasComponent },
  { path: 'ficha-pathfinder', component: FichaPathfinderComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
