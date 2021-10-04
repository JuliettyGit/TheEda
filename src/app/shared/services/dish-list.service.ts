import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

import { IDish } from "../Interfaces/IDish";
import { IIngredient } from "../Interfaces/IIngredient";
import { ApiUrls } from "../../../environments/ApiUrls";

@Injectable()
export class DishListService {
  baseUrl = environment.baseApiUrl;

  constructor( private http: HttpClient) {}

  getDishList(): Observable<IDish[]>
  {
    return this.http
      .get<IDish[]>(`${this.baseUrl}${ApiUrls.DishList}`);
  }

  getDish(dishID: number): Observable<IDish>
  {
    return this.http
      .get<IDish>(`${this.baseUrl}${ApiUrls.DishList}/${dishID}`)
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
    return this.http.post<IDish>(`${this.baseUrl}${ApiUrls.DishList}`, dish);
  }

  deleteDish(dishToDeleteID: number): Observable<{}>
  {
    return this.http.delete(`${this.baseUrl}${ApiUrls.DishList}/${dishToDeleteID}`)
  }
}
