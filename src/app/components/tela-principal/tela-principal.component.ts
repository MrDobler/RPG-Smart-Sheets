import { FichasComponent } from './../fichas/fichas.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  constructor(router: Router, route: ActivatedRoute) { }

  ngOnInit() {
  }

}
