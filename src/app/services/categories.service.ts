import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Product, createProductDTO, updateProductDTO } from '../models/product.model';
import { Category } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // --------Propiedades--------
  platziAPI = `${environment.API_PLATZI}`;

  // --------Constructor--------
  constructor(
    private http: HttpClient
  ) { }

  // --------MÉTODOS--------
  getAll(offset?: number, limit?: number) {
    let params = new HttpParams();
    console.log('offset', offset);
    console.log('limit', limit);
    if(offset!=null && limit != null) {
      params = params.append('offset', offset);
      params = params.append('limit', limit);
      console.log('params', params);
    }
    return this.http.get<Category[]>(`${this.platziAPI}/api/categories`, {params});
  }
}
