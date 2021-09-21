import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { IState } from "../../Interfaces/IState";
import { Observable } from "rxjs";
import { IDish } from "../../Interfaces/IDish";
import {
  desertsListSelector,
  pizzasListSelector,
  potatoListSelector,
  saladListSelector
} from "../../store/selectors/selectors";
import {orderListSelector} from "../../store/selectors/orderSelector";

@Component({
  selector: 'app-main-page-view',
  templateUrl: './main-page-view.component.html',
  styleUrls: ['./main-page-view.component.scss']
})
export class MainPageViewComponent implements OnInit {

  pizzasList$: Observable<Array<IDish>> = this.store$.pipe(select(pizzasListSelector));
  potatoList$: Observable<Array<IDish>> = this.store$.pipe(select(potatoListSelector));
  saladsList$: Observable<Array<IDish>> = this.store$.pipe(select(saladListSelector));
  desertsList$: Observable<Array<IDish>> = this.store$.pipe(select(desertsListSelector));
  orderList$: Observable<Array<IDish>> = this.store$.pipe(select(orderListSelector))

  constructor( private store$: Store<IState> ) { }

  ngOnInit(): void {}

}
