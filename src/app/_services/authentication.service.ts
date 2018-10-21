import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of, throwError} from 'rxjs';
import {User} from '../_models/user';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = false;

  constructor(
    private http: HttpClient
  ) {
    this.loggedIn = !!localStorage.getItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  get currentUser(): User {
    let u: string = localStorage.getItem('currentUser');
    if (u) {
      const jwtHelper = new JwtHelperService();
      let decoded = jwtHelper.decodeToken(u);
      return decoded;
    }
    return null;
  }

  login(username: string, password: string) {

    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');

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

          localStorage.setItem('currentUser', JSON.stringify(res['token']));
          this.loggedIn = true;
        }
        return res;
      }));
  }

  logout() {



    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }


}
