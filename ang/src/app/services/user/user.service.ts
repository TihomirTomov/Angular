import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  roles: any;
  path: string = '';

  constructor(private http: HttpClient) { }


  register(username, password): Observable<User> {
    return;
  }
  login(username, password): Observable<User> {
    return;
  }

  logout(): Observable<User> {
    return;
  }

  isAuth(): boolean {
    return window.sessionStorage.getItem('token') !== null;
  }

}
