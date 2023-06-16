import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import { Observable, throwError, map, zip } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User, createUserDTO } from '../../models/user.model';
import { Auth } from '../../models/auth.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  // --------Propiedades--------
  platziApi = `${environment.API_PLATZI}/api/auth`; //'https://young-sands-07814.herokuapp.com/api/products';
  token: string = '';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    // this.token = this.tokenService.getToken();
  }

  // --------MÉTODOS--------
  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.platziApi}/login`, {email, password})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 404) { // error 404 o httpstatuscode.notfound
          console.log('error 404');
          return throwError('Error 400, no se encontro el producto');
        }
        return throwError('ups algo salio mal');
      })
    )
  }

  profile() {
    let token = this.tokenService.getToken();
    if(token !== '') {
      return this.http.get<User>(`${this.platziApi}/profile`, {headers: {authorization: token}})
    }
    return null;
  }
}
