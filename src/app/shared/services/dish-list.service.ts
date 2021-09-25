import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IDish } from "../../fastfood-module/Interfaces/IDish";
import { IIngredient } from "../../fastfood-module/Interfaces/IIngredient";

@Injectable()
export class DishListService {

  constructor( private http: HttpClient) {}

  getDishList(): Observable<IDish[]>
  {
    return this.http
      .get<IDish[]>('http://localhost:3000/dishes');
  }

  addNewDish(name: string, img: string, price: number, ingredients: Array<IIngredient>, category: string): Observable<IDish>
  {
    const dish = {
      name,
      img,
      price,
      ingredients,
      category
    }
    return this.http.post<IDish>('http://localhost:3000/dishes', dish);
  }

  deleteDish(dishToDeleteID: number): Observable<{}>
  {
    return this.http.delete(`http://localhost:3000/dishes/${dishToDeleteID}`)
  }
}
