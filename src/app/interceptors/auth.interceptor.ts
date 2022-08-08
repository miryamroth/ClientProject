import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private AUTH_HEADER = "SessionId";
    private COMPANY_HEADER = "CompanyId";
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );

    constructor() {

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        /**
         * Add content type, but only if Do-Not-Add-Headers header not specified, and the content is not a FormData object
         */
        if (!req.headers.has("Content-Type") && !req.headers.has("Do-Not-Add-Headers") && !(req.body instanceof FormData)) {
            req = req.clone({
                headers: req.headers.set("Content-Type", "application/json")
            });
        }
        // if (this.authService.isLoggedOn) 
        //     req = this.addAuthenticationToken(req);                 

        return next.handle(req);
    }


 
}
