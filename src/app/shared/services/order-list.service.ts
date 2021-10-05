import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IOrderDish } from "../Interfaces/IOrderDish";
import { environment } from "../../../environments/environment";
import { ApiUrls } from "../../../environments/ApiUrls";


@Injectable()
export class OrderListService {
  baseUrl = environment.baseApiUrl;
  private orderListUrl = `${this.baseUrl}${ApiUrls.OrderList}`;

  constructor( private http: HttpClient ) {}

    getOrderList(): Observable<IOrderDish[]>
    {
      return this.http
        .get<IOrderDish[]>(this.orderListUrl);
    }

  addToOrderList(dishID: string): Observable<IOrderDish>
  {
    const orderDish = {
      dishID: dishID
    }
    return this.http.post<IOrderDish>(this.orderListUrl, orderDish);
  }

  deleteDish(dishToDeleteID: number): Observable<{}>
  {
    return this.http.delete(`${this.orderListUrl}/${dishToDeleteID}`)
  }
}
