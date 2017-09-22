import { FichaPathfinderComponent } from './ficha-pathfinder/ficha-pathfinder.component';
import { FichasComponent } from './fichas/fichas.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';



const APP_ROUTES: Routes = [
  { path: '', component: TelaPrincipalComponent},
  { path: 'login', component: LoginComponent },
  { path: 'fichas', component: FichasComponent },
  { path: 'fichaPathfinder', component: FichaPathfinderComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
