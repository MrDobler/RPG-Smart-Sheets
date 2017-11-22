import { Arma } from './../armas/arma';
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-armas',
    templateUrl: './armas.component.html',
    styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {

    public arma = new Arma();

    @Input() armas = [
        {
            nome : 'Espada Bastarda',
            bonus : 2,
            critico : 2,
            tipo : 'Espada Longa',
            alcance : 5,
            municao : '',
            dano : '2d6'
        }
    ];

    constructor() {}

    ngOnInit() {

    }

    addArma(arma: Arma) {
        if (arma.isValid()) {
          const valorArma = Object.assign({}, arma);
          this.armas.push(valorArma);
          this.arma = new Arma;
        }
    }
}
