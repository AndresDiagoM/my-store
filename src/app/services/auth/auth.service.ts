import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import { Auth } from '../../models/auth.model';
import { TokenService } from './token.service';

// interceptar petición y medir tiempo. Se añade a cada petición que se quiere medir
import { checkTime } from 'src/app/interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // --------Propiedades--------
  platziApi = `${environment.API_PLATZI}/api/auth`;
  //'https://young-sands-07814.herokuapp.com/api/products';
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }


  // --------MÉTODOS--------
  login(email: string, password: string) {
    //console.log(this.platziApi)
    return this.http.post<Auth>(`${this.platziApi}/login`, {email, password})
    .pipe(
      tap(Response => {
        //console.log('result', Response.access_token);
        this.tokenService.setToken(Response.access_token);
        //console.log('token', this.tokenService.getToken());
        this.getProfile().subscribe();
      }),
      catchError((error: HttpErrorResponse) => {
        if(error.status === 404) { // error 404 o httpstatuscode.notfound
          console.log('error 404');
          return throwError('[auth-service] Error 400, no se encontró el usuario');
        }
        return throwError('ups algo salio mal');
      })
    )
  }

  getProfile() {
    // let token = this.tokenService.getToken();
    // let headers = new HttpHeaders();
    // //console.log('[auth-service] token', token);
    // headers = headers.append('authorization', `Bearer ${token}`);
    // headers = headers.append('Content-Type', 'application/json');
    // return this.http.get<User>(`${this.platziApi}/profile`, {headers})
    return this.http.get<User>(`${this.platziApi}/profile`, {context: checkTime()})
    .pipe(
      tap(user => {
        console.log('[auth-service] profile', user);
        this.user.next(user);
      })
    )
  }

  logout() {
    // set the token to null
    this.tokenService.removeToken();
    // return this.http.post(`${this.platziApi}/logout`, {})
    return null;
  }
}
