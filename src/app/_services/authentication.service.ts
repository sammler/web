import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from './settings.service';
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
    private http: HttpClient,
    private settingsService: SettingsService
  ) {
    this.loggedIn = !!localStorage.getItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  get currentUser(): User {
    const u: string = localStorage.getItem('currentUser');
    if (u) {
      const jwtHelper = new JwtHelperService();
      let decoded = jwtHelper.decodeToken(u);
      decoded.token = u;
      return decoded;
    }
    return null;
  }

  get currentUserToken(): string {

    return localStorage.getItem('currentUser');
  }

  login(username: string, password: string) {

    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');

    // debugger;
    return this.http.post<any>(
      `${this.settingsService.settings.authService}/v1/user/login`,
      {username, password}
    )
      .pipe(map((result: any) => {

        console.log(`${this.settingsService.settings.authService}/v1/user/login > result`, result);

        // if (user.status !== 200) {
        // debugger;
        //   throwError(user);
        // }

        if (result && result.token) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          // data.authdata = window.btoa(username + ':' + password);

          localStorage.setItem('currentUser', result.token);
          this.loggedIn = true;
        }
        return result;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }


}
