import { Component, OnInit } from '@angular/core';

import { IDish } from "../../Interfaces/IDish";
import { OrderListService } from "../../services/order-list.service";
import {IOrderDish} from "../../Interfaces/IOrderDish";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {orderedDishesSelector} from "../../store/selectors/orderSelector";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  orderList$: Observable<IDish[]> = this.store$.pipe(
    select(orderedDishesSelector),
  );

  constructor( private orderListService: OrderListService,
               private store$: Store ) {}

}
