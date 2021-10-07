import { Action } from "@ngrx/store";
import { IDish } from "../../Interfaces/IDish";

export enum DishListActionsType {
  LoadDishList = '[Dish list] Load Dishes',
  DishListLoadedSuccess = '[Dish list] Dishes Loaded Success',
  DishListLoadedError = '[Dish list] Dishes Loaded Error',
}

export class LoadDishList implements Action {
  readonly type = DishListActionsType.LoadDishList;
}

export class DishListLoadedSuccess implements Action {
  readonly type = DishListActionsType.DishListLoadedSuccess;

  constructor(public payload: {dishes: IDish[]}) {}
}

export class DishListLoadedError implements Action {
  readonly type = DishListActionsType.DishListLoadedError;
}

export type DishListActions = LoadDishList | DishListLoadedSuccess | DishListLoadedError;
