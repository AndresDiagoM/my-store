import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product, createProductDTO, updateProductDTO } from '../models/product.model';
import { Firestore, collection, addDoc, collectionData,
        doc, deleteDoc, updateDoc,
        limit, orderBy, query, startAfter } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // --------Propiedades--------
  fakeStoreProductsUrl = 'https://fakestoreapi.com/products';
  platziProductsUrl = 'https://young-sands-07814.herokuapp.com/api/products ';
  ejemploApiFirebase1 = 'https://api-ejemplo1-24e88-default-rtdb.firebaseio.com/productos.json';
  angularPlatziCurso3 = `${environment.API_URL}/api/productos.json`;

  constructor(
    private http: HttpClient,
    private firestore: Firestore
  ) { }

  // --------MÉTODOS--------
  getProducts() {
    return this.http.get<Product[]>(this.angularPlatziCurso3)
    .pipe(
      retry(3) // con observadores se puede usar retry
    );
  }
  getProduct(id: string) {
    let ejemploApiFirebase1get = 'https://angular-platzi-curso3-default-rtdb.firebaseio.com/productos';
    return this.http.get<Product>(`${ejemploApiFirebase1get}/${id}${'.json'}`);
  }
  create(product: createProductDTO | Product) {
    // add product with a post request with incremental
    return this.http.post<Product>(this.angularPlatziCurso3, product);
  }
  delete(product: Product) {
    // delete product with a delete request
    let ejemploApi = 'https://angular-platzi-curso3-default-rtdb.firebaseio.com/productos';
    return this.http.delete<Product>(`${ejemploApi}/${product.id}${'.json'}`);
  }
  update(id: string, dto: updateProductDTO){
    // la url de una edicion funciona como la de un get
    // put es para reemplazar todo el objeto
    // patch es para reemplazar solo una parte del objeto
    let ejemploApi = 'https://angular-platzi-curso3-default-rtdb.firebaseio.com/productos';
    return this.http.put<Product>(`${ejemploApi}/${id}${'.json'}`, dto);
  }
  getProductsByPage(offset: number, limit: number) {
    return this.http.get<Product[]>(this.angularPlatziCurso3, {
      params: {offset, limit}
    });
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
  updateFirestore(id: string, dto: updateProductDTO) {
    const productRef = doc(this.firestore, `productos/${id}`);
    return updateDoc(productRef, dto);
  }
  getPageFirestore(offset: string, limitN: number) {
    // obtener productos con la paginación usando offset y limit
    const productRef = collection(this.firestore, 'productos');
    //return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
    return collectionData(
      query(productRef, orderBy('id'), limit(limitN), startAfter(offset))
    ) as Observable<Product[]>;
  }
}
