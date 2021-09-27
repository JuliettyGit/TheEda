import { OrderActions, userActionsType } from "../actions/orderAction";
import { initialOrderState } from "../state/initialOrderState";

export const ODER_REDUCER_NODE = "orderReducer"

export const orderReducer = (state = initialOrderState, action: OrderActions) =>
{
  switch (action.type)
  {
    case userActionsType.AddToOrder: {
      return {
        ...state,
        orderList: [...state.orderList, action.payload]
      }
    }
    case userActionsType.deleteFromOrder:
    {
      return {
        ...state,
        orderList: state.orderList.filter(dish => dish.name !== action.payload.name),
      }
    }
  }
  return state
};
