// import {initialAppState} from "../state/initialAppState";
// import {adminActionsType, DishListActions} from "../actions/dishListActions";
//
// export const APP_REDUCER_NODE = "dishListReducer"
//
// export const dishListReducer = (state = initialAppState, action: DishListActions) =>
//   {
//     switch (action.type)
//     {
//       case adminActionsType.addDish:
//       {
//         return {
//           ...state,
//           dishList: [...state.dishList, action.payload],
//         };
//       }
//       case adminActionsType.deleteDish:
//       {
//         return {
//           ...state,
//           dishList: state.dishList.filter(dish => dish.name !== action.payload.name),
//         }
//       }
//
//     }
//     return state
//   };
