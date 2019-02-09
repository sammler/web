import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../_models/user';
import {SettingsService} from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private settingsService: SettingsService) { }

  register(user: User) {
    console.log('Login with ', user);
    return this.http.post(`${this.settingsService.settings.authService}`, user);
  }
}
