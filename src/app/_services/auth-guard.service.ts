import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(): boolean {
    // if (!this.auth.isAuthenticated()) {
    //   console.log('redirecting because of the AuthGuardService');
    //   // this.router.navigate(['/login']);
    //   return false;
    // }
    return true;
  }
}
