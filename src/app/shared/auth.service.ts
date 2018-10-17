import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of, throwError} from 'rxjs';


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

  login(username: string, password: string) {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<any>(
      '/auth-service/v1/user/login',
      { username, password }
      )
      .pipe(map((res: any) => {

        if (res.status !== 200) {
          throwError(res);
        }

        if (res) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          // data.authdata = window.btoa(username + ':' + password);
          //localStorage.setItem('currentUser', JSON.stringify(user));

          localStorage.setItem('auth_token', res['auth_token']);
          this.loggedIn = true;
        }
        return res;
      }));
  }

  loginold(username: String, password: String) {
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
        } else {
          console.log(data);
        }
      }))
      .pipe(catchError(err => {
        this.loggedIn = false;
        console.error('[auth-service:login] We have an error: ', err);
        return of(false);
      }));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }


}
