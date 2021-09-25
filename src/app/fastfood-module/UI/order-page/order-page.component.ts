import {Component, Input, OnInit} from '@angular/core';
import { Dish } from "../../../shared/Entities/Dish";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  @Input()
  orderList!: Array<Dish>

  constructor() { }

  ngOnInit(): void {
  }

}
