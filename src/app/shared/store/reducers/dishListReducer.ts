import { initialDishListState } from "../state/initialDishListState";
import { DishListActions, DishListActionsType } from "../actions/dishListActions";

export const DISH_LIST_REDUCER_NODE = "dishListReducer";

export const dishListReducer = (state = initialDishListState, action: DishListActions) =>
{
  switch (action.type) {
    case DishListActionsType.DishListLoadedSuccess:
      return{
        ...state,
        dishList: action.payload.dishes,
      };
    case DishListActionsType.DishListLoadedError:
      return {
        ...state,
        dishList: [],
      };
    default:
      return state;
  }
}
