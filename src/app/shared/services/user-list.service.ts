import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../Interfaces/IUser";
import {environment} from "../../../environments/environment";
import {ApiUrls} from "../../../environments/ApiUrls";

@Injectable()
export class UserListService {
  baseUrl = environment.baseApiUrl;

  constructor( private http: HttpClient ) {}

  getUsersList(): Observable<IUser[]>
  {
    return this.http
      .get<IUser[]>(`${this.baseUrl}${ApiUrls.Users}`);
  }

  addNewUser(name: string, email: string, password: string): Observable<IUser>
  {
    const user = {
      name: name,
      email: email,
      password: password
    }
    return this.http.post<IUser>(`${this.baseUrl}${ApiUrls.Users}`, user);
  }

  deleteUser(user: number): Observable<{}>
  {
    return this.http.delete(`${this.baseUrl}${ApiUrls.Users}/${user}`)
  }

}
