import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'Bearer 9566289dbeb950d883c311cb051a9c9d81a53718d5906e58f16fe1840c737f79'
    request = request.clone({
      setHeaders: {Authorization: `${token}`}
   });
    return next.handle(request);
  }
}
