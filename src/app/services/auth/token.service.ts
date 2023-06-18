import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import { Observable, throwError, map, zip } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User, createUserDTO } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // --------Propiedades--------
  platziApi = `${environment.API_PLATZI}/api/users`; //'https://young-sands-07814.herokuapp.com/api/products';
  token: string = '';

  constructor() { }

  // --------MÉTODOS--------
  setToken(token: string) {
    //this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    //return this.token;
    return localStorage.getItem('token');
  }
}
