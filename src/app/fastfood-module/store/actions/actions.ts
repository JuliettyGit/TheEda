import { Action } from "@ngrx/store";

export enum userActionsType {
  addToBookingCard = '[APP] add dish to bookList'
}
export class AddToBookingCard implements Action {
  readonly type = userActionsType.addToBookingCard;
  constructor(public payload: { name: string }) {
  }
}


export type AppActions = AddToBookingCard;
