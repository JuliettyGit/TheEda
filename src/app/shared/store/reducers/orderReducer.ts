import { initialOrderState } from "../state/initialOrderState";
import { OrderListActions, OrderListActionsType } from "../actions/orderAction";

export const ODER_REDUCER_NODE = "orderReducer"

export const orderReducer = (state = initialOrderState, action: OrderListActions) => {
  switch (action.type)
  {
    case OrderListActionsType.OrderListLoadedSuccess:
      return {
        ...state,
        orderList: action.payload.orderList,
      };

    case OrderListActionsType.OrderListLoadedError:
      return {
        ...state,
        orderList: [],
      };

    case OrderListActionsType.AddedToOrderSuccess:
      return {
        ...state,
        orderList: [...state.orderList, action.payload.orderList]
      };

    case OrderListActionsType.DeleteFromOrderSuccess:
      const a = state.orderList.filter(dish => dish.id !== action.payload.id);

      return {
        ...state,
        orderList: a,
      }

    default:
      return state;
  }
};
