import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { forkJoin } from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import { OrderListService } from "../../../shared/services/order-list.service";
import { IDish } from "../../../shared/Interfaces/IDish";
import { DishInfoDialogComponent } from "../modal-dialogs/dish-info-dialog/dish-info-dialog.component";
import { AddToOrder, deleteFromOrder } from "../../../shared/store/actions/orderAction";
import { IOrderState } from "../../../shared/Interfaces/IOrderState";
import { IOrderDish } from "../../../shared/Interfaces/IOrderDish";
import { DishListService } from "../../../shared/services/dish-list.service";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orderList: Array<IOrderDish> = [];
  orderListView: Array<IDish> = [];

  totalPrice: number = 0;
  prices: Array<number> = [];

  constructor( private http: HttpClient,
               private orderListService: OrderListService,
               private dishListService: DishListService,
               public dialog: MatDialog,
               private store$: Store<IOrderState> ) { }

  ngOnInit()
  {
    this.orderListService.getOrderList().pipe(
      map((orderList) => {
        this.orderList = orderList;
        return orderList;
      }),
      mergeMap((orderList: IOrderDish[]) =>
        forkJoin(orderList.map(dish => this.dishListService.getDish(Number(dish.dishID))))
      ),
    )
      .subscribe((orderedDishes: IDish[]) => {
        this.orderListView = orderedDishes;
        this.orderListView.forEach(dish => {
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

  addToOrder(dishPrice: number, dishID: string)
  {
    this.orderListService.addToOrderList(dishID)
      .subscribe((dish: IOrderDish) => {
        this.orderList.push(dish)
      });

    // this.store$.dispatch(new AddToOrder(dish));
    this.prices.push(dishPrice)
    this.getTotalPrice();
  }

  removeFromOrder(dishPrice: number, dishID: string)
  {
    let dishToDelete= this.orderList.find(dish => dish.dishID === dishID);

    if(dishToDelete)
    {
      let dishToDeleteID = dishToDelete.id;
      this.orderListService.deleteDish(dishToDeleteID)
        .subscribe(() =>{
          this.orderList = this.orderList.filter(dish => dish.id !== dishToDeleteID);
        });

      this.deletePrice(this.prices, dishPrice);
      this.getTotalPrice();
    }

    // this.store$.dispatch(new deleteFromOrder(dish));
    // window.location.reload();
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
