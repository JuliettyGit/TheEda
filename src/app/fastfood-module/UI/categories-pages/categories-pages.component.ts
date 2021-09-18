import { Component, OnInit } from '@angular/core';
import {Repository} from "../../Repository/Repository";
import { Dish } from "../../Entities/Dish";

@Component({
  selector: 'app-categories-pages',
  templateUrl: './categories-pages.component.html',
  styleUrls: ['./categories-pages.component.scss']
})
export class CategoriesPagesComponent implements OnInit {

  allDishes: Array<Dish> = new Repository().dishes;

  constructor() { }

  ngOnInit(): void { }

}
