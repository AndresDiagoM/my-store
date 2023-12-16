/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, map, zip } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User, createUserDTO } from '../../models/user.model';
import { Auth } from '../../models/auth.model';
import { TokenService } from './token.service';

// para interceptar la petición y medir el tiempo. Se tiene que añadir a cada petición que se quiere medir
import { checkTime } from 'src/app/interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // --------Propiedades--------
  platziApi = `${environment.API_PLATZI}/api/auth`;
  //'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }


  // --------MÉTODOS--------
  login(email: string, password: string) {
    //console.log(this.platziApi)
    return this.http.post<Auth>(`${this.platziApi}/login`, {email, password})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 404) { // error 404 o httpstatuscode.notfound
          console.log('error 404');
          return throwError('[auth-service] Error 400, no se encontró el usuario');
        }
        return throwError('ups algo salio mal');
      })
    )
  }

  profile() {
    // let token = this.tokenService.getToken();
    // let headers = new HttpHeaders();
    // //console.log('[auth-service] token', token);
    // headers = headers.append('authorization', `Bearer ${token}`);
    // headers = headers.append('Content-Type', 'application/json');
    // return this.http.get<User>(`${this.platziApi}/profile`, {headers})
    return this.http.get<User>(`${this.platziApi}/profile`, {context: checkTime()})
  }

  logout() {
    // set the token to null
    this.tokenService.setToken('');
    // return this.http.post(`${this.platziApi}/logout`, {})
    return null;
  }
}
