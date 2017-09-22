import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  abaModal: string;

  constructor() { }

  ngOnInit() {
    this.abaModal = 'login';
  }

  switchAba() {
    this.abaModal = 'login' ? 'cadastro' : 'login';
  }

}
