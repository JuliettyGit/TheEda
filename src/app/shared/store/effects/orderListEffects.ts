import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {catchError, exhaustMap, map, mergeMap} from "rxjs/operators";
import { of } from "rxjs";

import {
  AddedToOrderSuccess,
  AddToOrderError, DeleteFromOrderError, DeleteFromOrderSuccess,
  OrderListActionsType,
  OrderListLoadedError,
  OrderListLoadedSuccess
} from "../actions/orderAction";
import { OrderListService } from "../../services/order-list.service";
import { IOrderDish } from "../../Interfaces/IOrderDish";

@Injectable()
export class OrderListEffects {

  loadOrderList$ = createEffect(
    () => this.actions$.pipe(
      ofType(OrderListActionsType.LoadOrderList),
      mergeMap(() =>
        this.orderListService.getOrderList().pipe(
          map((orderList: Array<IOrderDish>) => new OrderListLoadedSuccess({
              orderList: orderList
            })
          ),
          catchError(() => of(new OrderListLoadedError())),
        ))
    ),
    {dispatch: true}
  );

  addToOrderList$ = createEffect(
    () => this.actions$.pipe(
      ofType(OrderListActionsType.AddToOrder),
      exhaustMap( (newOrderedDish: IOrderDish) =>
        this.orderListService.addToOrderList(newOrderedDish.dishID).pipe(
          map((newOrdered: IOrderDish) => {
            console.log(newOrdered)
              return new AddedToOrderSuccess({
                orderList: newOrdered
              })
            }
          ),
          catchError(() => of(new AddToOrderError())),
        )
      )
    ),
    {dispatch: true}
  );

  deleteFromOrderList$ = createEffect(
    () => this.actions$.pipe(
      ofType(OrderListActionsType.DeleteFromOrder),
      exhaustMap((action: IOrderDish) => {
      return this.orderListService.deleteFromOrderList(Number(action.dishID)).pipe(
          map(() => {
              return new DeleteFromOrderSuccess({
                id: Number(action.dishID)
              })
            }
          ),
          catchError(() => of(new DeleteFromOrderError())),
        )
})
    ),
    {dispatch: true}
  );
  constructor(private actions$: Actions,
              private orderListService: OrderListService) {}

}
