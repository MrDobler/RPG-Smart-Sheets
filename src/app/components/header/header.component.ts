import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    abaModal =
    {
      titulo: '',
      value: ''
    };

    constructor() { }

    ngOnInit() {
      this.abaModal.value = 'login';
      this.abaModal.titulo = 'Login';
    }

    switchAba() {
      this.abaModal.value = this.abaModal.value === 'login' ? 'cadastro' : 'login';
      this.abaModal.titulo = this.abaModal.titulo === 'Login' ? 'Cadastro' : 'Login';
    }

}
