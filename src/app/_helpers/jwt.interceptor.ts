import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    // Todo: changed from: http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Hurray, we have an HttpIntercepter ... JWT ...');
        // add authorization header with jwt token if available
        let token = this.authenticationService.currentUserToken;
        console.log('token', token);
        if (token) {
            request = request.clone({
                setHeaders: {
                    "x-access-token": token
                }
            });
        }
        return next.handle(request);
    }
}
