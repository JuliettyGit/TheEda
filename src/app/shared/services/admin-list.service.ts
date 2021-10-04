import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IUser } from "../Interfaces/IUser";
import { environment } from "../../../environments/environment";
import { ApiUrls } from "../../../environments/ApiUrls";

@Injectable()
export class AdminListService {
  baseUrl = environment.baseApiUrl;

  constructor( private http: HttpClient ) {}

  getAdminsList(): Observable<IUser[]>
  {
    return this.http
      .get<IUser[]>(`${this.baseUrl}${ApiUrls.Admins}`);
  }

  addNewAdmin(name: string, email: string, password: string): Observable<IUser>
  {
    const admin = {
      name: name,
      email: email,
      password: password,
    }
    return this.http.post<IUser>(`${this.baseUrl}${ApiUrls.Admins}`, admin);
  }

  deleteAdmin(admin: number): Observable<{}>
  {
    return this.http.delete(`${this.baseUrl}${ApiUrls.Admins}/${admin}`)
  }

}
