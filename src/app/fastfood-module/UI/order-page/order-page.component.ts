import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";

import { orderListService } from "../../../shared/services/order-list.service";
import { IDish } from "../../Interfaces/IDish";
import { DishInfoDialogComponent } from "../modal-dialogs/dish-info-dialog/dish-info-dialog.component";
import { IIngredient } from "../../Interfaces/IIngredient";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orderList: Array<IDish> = [];

  constructor( private http: HttpClient,
               private orderListService: orderListService,
               public dialog: MatDialog ) { }

  ngOnInit(): void
  {
    this.orderListService.getOrderList()
      .subscribe((dished: IDish[]) => {
        this.orderList = dished
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
  }

  removeFromOrder(dishToDeleteID: number)
  {
    this.orderListService.deleteDish(dishToDeleteID)
      .subscribe(() =>{
        this.orderList = this.orderList.filter(dish => dish.id !== dishToDeleteID);
      })
  }

}
