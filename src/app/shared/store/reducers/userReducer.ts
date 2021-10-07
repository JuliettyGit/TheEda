import { UserActions, userNotificationsActionsType } from "../actions/userActions";
import { initialUserState } from "../state/initialUserState";

export const USER_REDUCER_NODE = "userReducer"

export const userReducer = (state = initialUserState, action: UserActions) =>
{
  switch (action.type)
  {
    case userNotificationsActionsType.logIn: {
      return {
        ...state,
        userInSystem: action.payload
      }
    }
    case userNotificationsActionsType.logOut:
    {
      return {
        ...state,
        userInSystem: action.payload
      }
    }
  }
  return state
};
