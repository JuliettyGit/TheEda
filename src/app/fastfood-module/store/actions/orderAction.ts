import { Action } from "@ngrx/store";
import {IDish} from "../../Interfaces/IDish";

export enum userActionsType {
  addToOrder = '[APP] add dish to dishList'
}
export class AddToOrder implements Action {
  readonly type = userActionsType.addToOrder;
  constructor(public payload: IDish) {}
}


export type OrderActions = AddToOrder;
