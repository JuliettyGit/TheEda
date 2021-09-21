import { Action } from "@ngrx/store";

export enum userActionsType {
  addToOrder = '[APP] add dish to dishList'
}
export class AddToOrder implements Action {
  readonly type = userActionsType.addToOrder;
  constructor(public payload: { name: string }) {
  }
}


export type OrderActions = AddToOrder;
