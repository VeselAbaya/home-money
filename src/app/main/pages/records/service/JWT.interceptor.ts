import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const reqWithToken = req.clone({
      setHeaders: {'X-Auth': localStorage.getItem('token')}
    });

    return next.handle(reqWithToken);
  }
}
