import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IState} from "../../Interfaces/IState";
import {APP_REDUCER_NODE} from "../reducers/reducer";
import {IDish} from "../../Interfaces/IDish";

export const dishListFutureSelector = createFeatureSelector<IState>(APP_REDUCER_NODE);

export const dishListSelector = createSelector(
  dishListFutureSelector,
  (state: IState) =>
  {
    return state.dishList
  }
);

export const pizzasListSelector = createSelector(
  dishListFutureSelector,
  (state: IState) =>
  {
    const data: IDish[] = Object.values(state.dishList);
    return data.filter((dish: IDish) => dish.category == "Pizza")
  }
);

export const potatoListSelector = createSelector(
  dishListFutureSelector,
  (state: IState) =>
  {
    const data: IDish[] = Object.values(state.dishList);
    return data.filter((dish: IDish) => dish.category == "Potato")
  }
);

export const desertsListSelector = createSelector(
  dishListFutureSelector,
  (state: IState) =>
  {
    const data: IDish[] = Object.values(state.dishList);
    return data.filter((dish: IDish) => dish.category == "Desert")
  }
);

export const saladListSelector = createSelector(
  dishListFutureSelector,
  (state: IState) =>
  {
    const data: IDish[] = Object.values(state.dishList);
    return data.filter((dish: IDish) => dish.category == "Salad")
  }
)


