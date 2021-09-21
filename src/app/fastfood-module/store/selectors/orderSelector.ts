import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IOrderState } from "../../Interfaces/IOrderState";
import { ODER_REDUCER_NODE } from "../reducers/orderReducer";

export const orderListFutureSelector = createFeatureSelector<IOrderState>(ODER_REDUCER_NODE);

export const orderListSelector = createSelector(
  orderListFutureSelector,
  (state: IOrderState) =>
  {
    return state.orderList
  }
)
