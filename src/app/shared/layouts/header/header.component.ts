import { Component, OnInit } from '@angular/core';

import { IDish } from "../../Interfaces/IDish";
import { OrderListService } from "../../services/order-list.service";
import {IOrderDish} from "../../Interfaces/IOrderDish";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  orderList: Array<IOrderDish> = [];

  constructor( private orderListService: OrderListService) { }

  ngOnInit(): void
  {
    this.orderListService.getOrderList()
      .subscribe((dished: IOrderDish[]) => {
        this.orderList = dished
      });
  }
}
