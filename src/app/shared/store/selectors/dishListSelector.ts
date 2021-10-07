import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IDishListState } from "../../Interfaces/IDishListState";
import { DISH_LIST_REDUCER_NODE } from "../reducers/dishListReducer";

export const dishListFutureSelector = createFeatureSelector<IDishListState>(DISH_LIST_REDUCER_NODE);

export const dishListSelector = createSelector(
  dishListFutureSelector,
  (state: IDishListState) =>
  {
    return state.dishList
  }
);
