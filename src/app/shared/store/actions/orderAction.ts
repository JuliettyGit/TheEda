import {Action, createAction, props} from "@ngrx/store";

import { IOrderDish } from "../../Interfaces/IOrderDish";


export enum OrderListActionsType {
  LoadOrderList = '[Order list] Load Order List',
  OrderListLoadedSuccess = '[Order list] Order List Loaded Success',
  OrderListLoadedError = '[Order list] Order List Loaded Error',

  AddToOrder = '[Order list] Add Dish To Order List',
  AddedToOrderSuccess = '[Order List] Added To Order Success',
  AddedToOrderError = '[Order List] Added To Order Error',

  DeleteFromOrder = '[Order list] Delete Dish From Order List',
  DeleteFromOrderSuccess = '[order List] Delete Dish from Order List Success',
  DeleteFromOrderError = '[order List] Delete Dish from Order List Error',
}

export const LoadOrderList = createAction(
  OrderListActionsType.LoadOrderList
)

export class OrderListLoadedSuccess implements Action {
  readonly type = OrderListActionsType.OrderListLoadedSuccess;

  constructor(public payload: { orderList: IOrderDish[] }) {
  }
}

export class OrderListLoadedError implements Action {
  readonly type = OrderListActionsType.OrderListLoadedError;
}

export const AddToOrder = createAction(
  OrderListActionsType.AddToOrder,
  props<{ dishID: number }>()
);

export class AddedToOrderSuccess implements Action {
  readonly type = OrderListActionsType.AddedToOrderSuccess;

  constructor(public payload: { orderList: IOrderDish }) {
  }
}

export class AddToOrderError implements Action {
  readonly type = OrderListActionsType.AddedToOrderError;
}

export const DeleteFromOrder = createAction(
  OrderListActionsType.DeleteFromOrder,
  props<{ dishID: number }>()
)

export class DeleteFromOrderSuccess implements Action {
  public readonly type = OrderListActionsType.DeleteFromOrderSuccess;

  constructor(public payload: { id: number }) {
  }
}

export class DeleteFromOrderError implements Action {
  public readonly type = OrderListActionsType.DeleteFromOrderError;
}


export type OrderListActions = typeof LoadOrderList | OrderListLoadedSuccess | OrderListLoadedError |
                               typeof AddToOrder | AddedToOrderSuccess | AddToOrderError |
                               typeof DeleteFromOrder | DeleteFromOrderSuccess | DeleteFromOrderError;
