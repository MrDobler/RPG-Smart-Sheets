import { FichaPathfinder } from './fichaPathfinder';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-pathfinder',
  templateUrl: './ficha-pathfinder.component.html',
  styleUrls: ['./ficha-pathfinder.component.css']
})



export class FichaPathfinderComponent implements OnInit {


  public ficha = new FichaPathfinder();
  constructor() { }

  ngOnInit() {
  }

}
