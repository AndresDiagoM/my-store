import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs'; // tap es un operador de rxjs que permite ejecutar una acción sin alterar el flujo de datos

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = performance.now();
    return next
    .handle(request)
    .pipe(
      tap(() => {
        const end = performance.now();
        console.log(request, `Request took ${end - start} milliseconds`);
      })
    )
  }
}
