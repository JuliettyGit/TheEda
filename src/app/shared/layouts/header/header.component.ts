import {Component, Input, OnInit} from '@angular/core';
import {IDish} from "../../../fastfood-module/Interfaces/IDish";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  orderList!: Array<IDish>

  constructor() { }

  ngOnInit(): void {
  }

}
