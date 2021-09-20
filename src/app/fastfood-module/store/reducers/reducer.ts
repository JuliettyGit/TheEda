import { initialAppState } from "../state/initialAppState";
import { AppActions, userActionsType} from "../actions/actions";

export const APP_REDUCER_NODE = "mainReducer"

export const mainReducer = (state = initialAppState, action: AppActions) =>
  {
    switch (action.type)
    {
      case userActionsType.addToBookingCard:
        return {
          ...state
        }
    }
    return state
  };
