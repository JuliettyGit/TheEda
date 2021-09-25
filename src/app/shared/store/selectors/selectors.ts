// import {createFeatureSelector, createSelector} from "@ngrx/store";
// import {IState} from "../../../fastfood-module/Interfaces/IState";
// import {CDish} from "../../Entities/CDish";
// import {Repository} from "../../Repository/Repository";
// import {CCategory} from "../../Entities/CCategory";
// // import {IDish} from "../../Interfaces/IDish";
//
// export const dishListFutureSelector = createFeatureSelector<IState>(APP_REDUCER_NODE);
//
// export const dishListSelector = createSelector(
//   dishListFutureSelector,
//   (state: IState) =>
//   {
//     return state.dishList
//   }
// );
//
// export const pizzasListSelector = createSelector(
//   dishListFutureSelector,
//   (state: IState) =>
//   {
//     const data: CDish[] = Object.values(state.dishList);
//     return data.filter((dish: CDish) => dish.category == CCategory.pizza.categoryName)
//   }
// );
// //
// // export const potatoListSelector = createSelector(
// //   dishListFutureSelector,
// //   (state: IState) =>
// //   {
// //     const data: IDish[] = Object.values(state.dishList);
// //     return data.filter((dish: IDish) => dish.category == "Potato")
// //   }
// // );
// //
// // export const desertsListSelector = createSelector(
// //   dishListFutureSelector,
// //   (state: IState) =>
// //   {
// //     const data: IDish[] = Object.values(state.dishList);
// //     return data.filter((dish: IDish) => dish.category == "Desert")
// //   }
// // );
// //
// // export const saladListSelector = createSelector(
// //   dishListFutureSelector,
// //   (state: IState) =>
// //   {
// //     const data: IDish[] = Object.values(state.dishList);
// //     return data.filter((dish: IDish) => dish.category == "Salad")
// //   }
// // )
//
//
