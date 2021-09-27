import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";

import { orderListService } from "../../../shared/services/order-list.service";
import { IDish } from "../../../shared/Interfaces/IDish";
import { DishInfoDialogComponent } from "../modal-dialogs/dish-info-dialog/dish-info-dialog.component";
import { IIngredient } from "../../../shared/Interfaces/IIngredient";
import { AddToOrder, deleteFromOrder } from "../../../shared/store/actions/orderAction";
import { IOrderState } from "../../../shared/Interfaces/IOrderState";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orderList: Array<IDish> = [];
  totalPrice: number = 0;
  prices: Array<number> = [];

  constructor( private http: HttpClient,
               private orderListService: orderListService,
               public dialog: MatDialog,
               private store$: Store<IOrderState> ) { }

  ngOnInit(): void
  {
    this.orderListService.getOrderList()
      .subscribe((dished: IDish[]) => {
        this.orderList = dished;
        this.orderList.forEach(dish => {
          this.prices.push(dish.price);
          this.getTotalPrice();
        });
      });
  }

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

  addToOrder(dish: IDish, name: string, img: string, price: number, ingredients: Array<IIngredient>, category: string)
  {
    this.orderListService.addToOrderList(name, img, price, ingredients, category)
      .subscribe((dish: IDish) => {
        this.orderList.push(dish)
      });

    this.store$.dispatch(new AddToOrder(dish));
    this.prices.push(dish.price)
    this.getTotalPrice();
    window.location.reload();
  }

  removeFromOrder(dish: IDish, dishToDeleteID: number)
  {
    this.orderListService.deleteDish(dishToDeleteID)
      .subscribe(() =>{
        this.orderList = this.orderList.filter(dish => dish.id !== dishToDeleteID);
      });

    this.store$.dispatch(new deleteFromOrder(dish));

    this.deletePrice(this.prices, dish.price);
    this.getTotalPrice();
    window.location.reload();
  }

  deletePrice(arr: Array<number>, price: number)
  {
    let index = arr.indexOf(price);
    if(index > -1)
    {
      arr.splice(index, 1);
    }
  }

  getTotalPrice()
  {
    this.totalPrice = this.prices.reduce((partial_sum, a) => partial_sum + a,0);
  }
}
