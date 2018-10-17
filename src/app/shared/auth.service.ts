import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  login(username: String, password: String) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/auth-service/v1/user/login',
        { username, password },
        { headers }
      )
      .pipe(tap(data => {
        console.log('data', data);
        if (data['success']) {
          localStorage.setItem('auth_token', data['auth_token']);
          this.loggedIn = true;
        }
      }))
      .pipe(catchError(err => {
        console.error(err);
        return of(false);
      }));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }


}
