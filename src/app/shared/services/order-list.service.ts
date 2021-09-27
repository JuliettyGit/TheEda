import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IDish } from "../Interfaces/IDish";
import { IIngredient } from "../Interfaces/IIngredient";

@Injectable()
export class orderListService{

  constructor( private http: HttpClient ) {}

    getOrderList(): Observable<IDish[]>
    {
      return this.http
        .get<IDish[]>('http://localhost:3000/orderList');
    }

  addToOrderList(name: string, img: string, price: number, ingredients: Array<IIngredient>, category: string): Observable<IDish>
  {
    const dish = {
      name,
      img,
      price,
      ingredients,
      category
    }
    return this.http.post<IDish>('http://localhost:3000/orderList', dish);
  }

  deleteDish(dishToDeleteID: number): Observable<{}>
  {
    return this.http.delete(`http://localhost:3000/orderList/${dishToDeleteID}`)
  }
}
