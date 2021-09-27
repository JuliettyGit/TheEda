import { Injectable } from "@angular/core";
import { ICategory } from "../Interfaces/ICategory";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DishCategoriesService {

  constructor( private http: HttpClient ) {}

  getDishCategories(): Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>('http://localhost:3000/categories');
  }

  removeCategory(category: number): Observable<{}>
  {
    return this.http.delete(`http://localhost:3000/categories/${category}`)
  }

  addNewCategory(name: string): Observable<ICategory>
  {
    const category = {
      name,
    }
    return this.http.post<ICategory>('http://localhost:3000/categories', category);
  }
}
