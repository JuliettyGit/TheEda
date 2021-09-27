import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IUserState } from "../../Interfaces/IUserState";
import { USER_REDUCER_NODE } from "../reducers/userReducer";

export const userFutureSelector = createFeatureSelector<IUserState>(USER_REDUCER_NODE);

export const userSelector = createSelector(
  userFutureSelector,
  (state: IUserState) =>
  {
    return state.userInSystem
  }
)
