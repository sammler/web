import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    // Todo: changed from: http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authenticationService.currentUserToken;
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
