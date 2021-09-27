import { Action } from "@ngrx/store";
import {IUser} from "../../Interfaces/IUser";

export enum userNotificationsActionsType {
  logIn = '[APP] add dish to order list',
  logOut = '[APP] delete dish from order list'
}

export class LogIn implements Action {
  readonly type = userNotificationsActionsType.logIn;
  constructor(public payload: boolean) {}
}

export class LogOut implements Action {
  public readonly type = userNotificationsActionsType.logOut;
  constructor(public payload: boolean)
  {}
}

export type UserActions = LogIn | LogOut;
