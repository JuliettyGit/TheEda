import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Store } from '@ngrx/store';

import { IState } from "../../../shared/Interfaces/IState";
import { DishInfoDialogComponent } from "../modal-dialogs/dish-info-dialog/dish-info-dialog.component";
import { AddToOrder } from "../../../shared/store/actions/orderAction";
import { ICategory } from "../../../shared/Interfaces/ICategory";
import { IDish } from "../../../shared/Interfaces/IDish";
import { DishCategoriesService } from "../../../shared/services/dish-categories.service";
import { DishListService } from "../../../shared/services/dish-list.service";
import { orderListService } from "../../../shared/services/order-list.service";
import { IIngredient } from "../../../shared/Interfaces/IIngredient";

@Component({
  selector: 'app-categories-pages',
  templateUrl: './categories-pages.component.html',
  styleUrls: ['./categories-pages.component.scss']
})
export class CategoriesPagesComponent implements OnInit {

  categories: Array<ICategory> = [];
  dishList: Array<IDish> = [];
  orderList: Array<IDish> = [];

  constructor( private dishCategories: DishCategoriesService,
               private dishListService: DishListService,
               private orderListService: orderListService,
               public dialog: MatDialog,
               private store$: Store<IState>) {
  }

  ngOnInit()
  {
    this.dishCategories.getDishCategories()
      .subscribe((categories: ICategory[]) => {
        this.categories = categories
      });

    this.dishListService.getDishList()
      .subscribe((dishes: IDish[]) => {
        this.dishList = dishes
      });
  }

  openInfoDialog(dish: IDish) {
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


  addToOrder(dish: IDish, name: string, img: string, price: number, ingredients: Array<IIngredient>, category: string)
  {
    this.orderListService.addToOrderList(name, img, price, ingredients, category)
      .subscribe((dish: IDish) => {
        this.orderList.push(dish)
      });

    this.store$.dispatch(new AddToOrder(dish));
  }
}
