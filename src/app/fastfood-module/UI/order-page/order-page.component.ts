import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';

import { OrderListService } from "../../../shared/services/order-list.service";
import { IDish } from "../../../shared/Interfaces/IDish";
import { DishInfoDialogComponent } from "../modal-dialogs/dish-info-dialog/dish-info-dialog.component";
import { AddToOrder, DeleteFromOrder, LoadOrderList } from "../../../shared/store/actions/orderAction";
import { DishListService } from "../../../shared/services/dish-list.service";
import { orderedDishesSelector, orderListSelector } from "../../../shared/store/selectors/orderSelector";
import { LoadDishList } from "../../../shared/store/actions/dishListActions";
import { IOrderDish } from "../../../shared/Interfaces/IOrderDish";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orderList$: Observable<IDish[]> = this.store$.pipe(
    select(orderedDishesSelector),
  ); //map

  totalPrice: number = 0;
  prices: Array<number> = [];

  constructor( private http: HttpClient,
               private orderListService: OrderListService,
               private dishListService: DishListService,
               public  dialog: MatDialog,
               private store$: Store )
  {}

  ngOnInit()
  {
    this.store$.dispatch(LoadOrderList());
    this.store$.dispatch(new LoadDishList());
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

  addToOrder(dishID: number)
  {
    this.store$.dispatch(AddToOrder({dishID}));
  }

  deleteFromOrder(dishID: number)
  {
   const orderList$: Observable<IOrderDish[]> = this.store$.pipe(
      select(orderListSelector),
    );

    let orderList: Array<IOrderDish> = [];

      orderList$.subscribe((dishes: IOrderDish[]) => {
        orderList = dishes
        })

    let dishToDelete = orderList.find(dish => dish.dishID === dishID);

    if(dishToDelete)
    {
      let dishID = dishToDelete.id;
      this.store$.dispatch(DeleteFromOrder({dishID}));
    }
  }

}
