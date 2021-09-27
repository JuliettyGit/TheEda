import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ODER_REDUCER_NODE } from "../reducers/orderReducer";
import { IOrderState } from "../../Interfaces/IOrderState";

export const orderListFutureSelector = createFeatureSelector<IOrderState>(ODER_REDUCER_NODE);

export const orderListSelector = createSelector(
  orderListFutureSelector,
  (state: IOrderState) =>
  {
    return state.orderList
  }
)
