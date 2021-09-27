import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../Interfaces/IUser";

@Injectable()
export class UserListService {

  constructor( private http: HttpClient ) {}

  getUsersList(): Observable<IUser[]>
  {
    return this.http
      .get<IUser[]>('http://localhost:3000/users');
  }

  addNewUser(name: string, email: string, password: string): Observable<IUser>
  {
    const user = {
      name: name,
      email: email,
      password: password
    }
    return this.http.post<IUser>('http://localhost:3000/users', user);
  }

  deleteUser(user: number): Observable<{}>
  {
    return this.http.delete(`http://localhost:3000/users/${user}`)
  }

}
