import { Action } from "@ngrx/store";

export enum adminActionsType {
  addDish = '[APP] add dish to dishList'
}
export class AddDish implements Action {
  readonly type = adminActionsType.addDish;
  constructor(public payload: { name: string }) {
  }
}


export type DishListActions = AddDish;
