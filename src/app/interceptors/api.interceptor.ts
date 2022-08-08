import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {BASE_API_URL} from '../common/const'
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   // var prefix = !req.url.startsWith("http") ? BASE_API_URL : '';
   // const apiReq = req.clone({ url: `${prefix}${req.url}` });
    return next.handle(req);
  }
  
}
