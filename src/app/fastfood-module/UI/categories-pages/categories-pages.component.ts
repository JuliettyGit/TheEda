import { Component, Input, OnInit } from '@angular/core';
import { IDish } from "../../Interfaces/IDish";
import { MatDialog } from "@angular/material/dialog";
import { DishInfoDialogComponent } from "../modal-dialogs/dish-info-dialog/dish-info-dialog.component";

@Component({
  selector: 'app-categories-pages',
  templateUrl: './categories-pages.component.html',
  styleUrls: ['./categories-pages.component.scss']
})
export class CategoriesPagesComponent implements OnInit {

  @Input()
  pizzasList!: Array<IDish>;

  @Input()
  potatoList!: Array<IDish>;

  @Input()
  saladsList!: Array<IDish>;

  @Input()
  desertsList!: Array<IDish>;

  constructor( public dialog: MatDialog, ) {}

  ngOnInit(): void { }

  openInfoDialog(dish: IDish)
  {
    this.dialog.open(DishInfoDialogComponent, {
      data: {
        name: dish.name,
        img: dish.img,
        price: dish.price,
        ingredients: dish.ingredients,
        category: dish.category
      }
    });
  }
}
