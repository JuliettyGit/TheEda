import { initialAppState } from "../state/initialAppState";
import { DishListActions } from "../actions/dishListActions";

export const APP_REDUCER_NODE = "dishListReducer"

export const dishListReducer = (state = initialAppState, action: DishListActions) =>
  {
    return state
  };
