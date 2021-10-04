import { Injectable } from "@angular/core";
import { ICategory } from "../Interfaces/ICategory";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { ApiUrls } from "../../../environments/ApiUrls";

@Injectable()
export class DishCategoriesService {
  baseUrl = environment.baseApiUrl;

  constructor( private http: HttpClient ) {}

  getDishCategories(): Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>(`${this.baseUrl}${ApiUrls.CategoriesList}`);
  }

  removeCategory(category: number): Observable<{}>
  {
    return this.http.delete(`${this.baseUrl}${ApiUrls.CategoriesList}/${category}`)
  }

  addNewCategory(name: string): Observable<ICategory>
  {
    const category = {
      name,
    }
    return this.http.post<ICategory>(`${this.baseUrl}${ApiUrls.CategoriesList}`, category);
  }
}
