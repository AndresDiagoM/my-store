import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, createProductDTO } from '../models/product.model';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // --------Propiedades--------
  fakeStoreProductsUrl = 'https://fakestoreapi.com/products';
  platziProductsUrl = 'https://young-sands-07814.herokuapp.com/api/products ';
  ejemploApiFirebase1 = 'https://api-ejemplo1-24e88-default-rtdb.firebaseio.com/productos.json';

  constructor(
    private http: HttpClient,
    private firestore: Firestore
  ) { }

  // --------MÉTODOS--------
  getProducts() {
    return this.http.get<Product[]>(this.ejemploApiFirebase1);
  }
  getProduct(id: string) {
    let ejemploApiFirebase1get = 'https://api-ejemplo1-24e88-default-rtdb.firebaseio.com/productos';
    return this.http.get<Product>(`${ejemploApiFirebase1get}/${id}${'.json'}`);
  }
  create(product: createProductDTO | Product) {
    // add product with a post request with incremental
    return this.http.post<Product>(this.ejemploApiFirebase1, product);
  }

  // --------MÉTODOS FIREBASE--------
  createFirestore(product: createProductDTO | Product) {
    const productRef = collection(this.firestore, 'productos');
    return addDoc(productRef, product);
  }
  getFirestore(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'productos');
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }
  deleteFirestore(product: Product) {
    const productRef = doc(this.firestore, `productos/${product.id}`);
    return deleteDoc(productRef);
  }
}
