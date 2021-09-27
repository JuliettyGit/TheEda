import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../Interfaces/IUser";

@Injectable()
export class AdminListService {

  constructor( private http: HttpClient ) {}

  getAdminsList(): Observable<IUser[]>
  {
    return this.http
      .get<IUser[]>('http://localhost:3000/admins');
  }

  addNewAdmin(name: string, email: string, password: string): Observable<IUser>
  {
    const admin = {
      name: name,
      email: email,
      password: password,
    }
    return this.http.post<IUser>('http://localhost:3000/admins', admin);
  }

  deleteAdmin(admin: number): Observable<{}>
  {
    return this.http.delete(`http://localhost:3000/orderList/${admin}`)
  }

}
