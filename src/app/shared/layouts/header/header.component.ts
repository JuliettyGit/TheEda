import { Component, OnInit } from '@angular/core';

import { IDish } from "../../Interfaces/IDish";
import { orderListService } from "../../services/order-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  orderList: Array<IDish> = [];

  constructor( private orderListService: orderListService) { }

  ngOnInit(): void
  {
    this.orderListService.getOrderList()
      .subscribe((dished: IDish[]) => {
        this.orderList = dished
      });
  }
}
