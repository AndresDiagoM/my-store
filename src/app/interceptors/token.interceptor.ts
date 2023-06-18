import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/auth/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //return next.handle(request);  // hace la petición normal
    // antes de hacer la peticion agrega el token al header
    const newRequest = this.addToken(request);
    return next.handle(newRequest);
  }

  addToken(request: HttpRequest<unknown>){
    const token = this.tokenService.getToken();
    if(token) {
      const newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
      return newRequest;
    }
    return request;
  }
}
