import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import { Observable, throwError, map, zip } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User, createUserDTO } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // --------Propiedades--------
  platziApi = `${environment.API_PLATZI}/api/users`; //'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  // --------MÉTODOS--------
  create(dto: createUserDTO): Observable<User> {
    return this.http.post<User>(`${this.platziApi}`, dto)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.platziApi}`);
  }
}
