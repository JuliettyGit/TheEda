import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {select, Store} from '@ngrx/store';

import { DishInfoDialogComponent } from "../modal-dialogs/dish-info-dialog/dish-info-dialog.component";
import { AddToOrder } from "../../../shared/store/actions/orderAction";
import { ICategory } from "../../../shared/Interfaces/ICategory";
import { IDish } from "../../../shared/Interfaces/IDish";
import { DishCategoriesService } from "../../../shared/services/dish-categories.service";
import { DishListService } from "../../../shared/services/dish-list.service";
import { OrderListService } from "../../../shared/services/order-list.service";
import { IOrderDish } from "../../../shared/Interfaces/IOrderDish";
import { Observable } from "rxjs";
import { dishListSelector } from "../../../shared/store/selectors/dishListSelector";
import { LoadDishList } from "../../../shared/store/actions/dishListActions";

@Component({
  selector: 'app-categories-pages',
  templateUrl: './categories-pages.component.html',
  styleUrls: ['./categories-pages.component.scss'],
})
export class CategoriesPagesComponent implements OnInit {

  categories: Array<ICategory> = [];
  dishList$: Observable<Array<IDish>> = this.store$.pipe(
    select(dishListSelector),
  );
  // orderList: Array<IOrderDish> = [];

  constructor( private dishCategories: DishCategoriesService,
               private dishListService: DishListService,
               private orderListService: OrderListService,
               public  dialog: MatDialog,
               private store$: Store<IDish[]>)
  {
  }

  ngOnInit()
  {
    this.store$.dispatch(new LoadDishList());

    this.dishCategories.getDishCategories()
      .subscribe((categories: ICategory[]) => {
        this.categories = categories
      });

    // this.dishListService.getDishList()
    //   .subscribe((dishes: IDish[]) => {
    //     this.dishList = dishes
    //   });
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

  addToOrder(dishID: number)
  {
    this.store$.dispatch(AddToOrder({dishID}));
  }

}
