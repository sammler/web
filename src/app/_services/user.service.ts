import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    console.log('Login with ', user);
    return this.http.post(`/auth-service/v1/user/register/local`, user);
  }
}
