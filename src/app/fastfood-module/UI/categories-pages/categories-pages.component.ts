import { Component, Input, OnInit } from '@angular/core';
import { IDish } from "../../Interfaces/IDish";

@Component({
  selector: 'app-categories-pages',
  templateUrl: './categories-pages.component.html',
  styleUrls: ['./categories-pages.component.scss']
})
export class CategoriesPagesComponent implements OnInit {

  // allDishes: Array<IDish> = initialAppState.dishList;
  @Input()
  pizzasList!: Array<IDish>;

  @Input()
  potatoList!: Array<IDish>;

  @Input()
  saladsList!: Array<IDish>;

  @Input()
  desertsList!: Array<IDish>;

  constructor( ) {}

  ngOnInit(): void { }

}
