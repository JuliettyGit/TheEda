import { OrderActions, userActionsType } from "../actions/orderAction";
import { initialOrderState } from "../state/initialOrderState";

export const ODER_REDUCER_NODE = "orderReducer"

export const orderReducer = (state = initialOrderState, action: OrderActions) =>
{
  switch (action.type)
  {
    case userActionsType.addToOrder:
      return {
        ...state
      }
  }
  return state
};
