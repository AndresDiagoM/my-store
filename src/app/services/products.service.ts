import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // --------Propiedades--------
  fakeStoreProductsUrl = 'https://fakestoreapi.com/products';
  platziProductsUrl = 'https://young-sands-07814.herokuapp.com/api/products ';
  ejemploApiFirebase1 = 'https://api-ejemplo1-24e88-default-rtdb.firebaseio.com/productos.json';

  constructor(
    private http: HttpClient
  ) { }

  // --------MÉTODOS--------
  getProducts() {
    return this.http.get<Product[]>(this.ejemploApiFirebase1);
  }
  getProduct(id: string) {
    let ejemploApiFirebase1get = 'https://api-ejemplo1-24e88-default-rtdb.firebaseio.com/productos';
    return this.http.get<Product>(`${ejemploApiFirebase1get}/${id}${'.json'}`);
  }
}
