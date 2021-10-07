import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ODER_REDUCER_NODE } from "../reducers/orderReducer";
import { IOrderState } from "../../Interfaces/IOrderState";
import { dishListFutureSelector } from "./dishListSelector";
import {IDish} from "../../Interfaces/IDish";

export const orderListFutureSelector = createFeatureSelector<IOrderState>(ODER_REDUCER_NODE);

export const orderListSelector = createSelector(
  orderListFutureSelector,
  (state: IOrderState) =>
  {
    return state.orderList
  }
);

export const orderedDishesSelector = createSelector(
  orderListFutureSelector,
  dishListFutureSelector,
  (orderListState, dishListState) =>
  {
    const orderedDishes: IDish[] = [];
    orderListState.orderList.forEach(value => {
     let dishInDishList = dishListState.dishList.find(dish => dish.id === value.dishID);
     if(dishInDishList)
     {
       orderedDishes.push(dishInDishList);
     }
    });
    return orderedDishes;
  }
)
