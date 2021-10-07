import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";

import { DishListService } from "../../services/dish-list.service";
import { DishListActionsType, DishListLoadedError, DishListLoadedSuccess } from "../actions/dishListActions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { IDish } from "../../Interfaces/IDish";

@Injectable()
export class DishListEffects {

  loadDishList$ = createEffect(
    () => this.actions$.pipe(
      ofType(DishListActionsType.LoadDishList),
      mergeMap(() =>
        this.dishListService.getDishList().pipe(
          map((dishes: Array<IDish>) => new DishListLoadedSuccess({
            dishes: dishes,
          })
          ),
          catchError(() => of(new DishListLoadedError()))
        ))
    ),
    {dispatch: true}
  );

  constructor(private actions$: Actions,
              private dishListService: DishListService) {}
}
