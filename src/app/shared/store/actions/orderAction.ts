import { Action } from "@ngrx/store";
import { IDish } from "../../../fastfood-module/Interfaces/IDish";

export enum userActionsType {
  AddToOrder = '[APP] add dish to order list',
  deleteFromOrder = '[APP] delete dish from order list'
}

export class AddToOrder implements Action {
  readonly type = userActionsType.AddToOrder;
  constructor(public payload: IDish) {}
}

export class deleteFromOrder implements Action {
  public readonly type = userActionsType.deleteFromOrder;
  constructor(public payload: IDish)
  {}
}

export type OrderActions = AddToOrder | deleteFromOrder;
