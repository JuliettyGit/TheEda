import { Component, OnInit } from '@angular/core';
import {IDish} from "../../../fastfood-module/Interfaces/IDish";
import {HttpClient} from "@angular/common/http";
import {orderListService} from "../../services/order-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  orderList: Array<IDish> = [];

  constructor( private http: HttpClient,
               private orderListService: orderListService) { }

  ngOnInit(): void
  {
    this.orderListService.getOrderList()
      .subscribe((dished: IDish[]) => {
        this.orderList = dished
      });
  }

  //TODO: update ui
  getChanges()
  {
    this.orderListService.getOrderList()
      .subscribe((dished: IDish[]) => {
        this.orderList = dished
      });
  }

}
