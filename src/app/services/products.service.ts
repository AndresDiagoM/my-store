import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Product, createProductDTO, updateProductDTO } from '../models/product.model';
import { Firestore, collection, addDoc, collectionData,
        doc, deleteDoc, updateDoc, getDoc,
        limit, orderBy, query, startAfter } from '@angular/fire/firestore';
import { Observable, throwError, map, zip } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // --------Propiedades--------
  fakeStoreProductsUrl = 'https://fakestoreapi.com/products';
  platziProductsUrl = 'https://young-sands-07814.herokuapp.com/api/products';
  ejemploApiFirebase1 = 'https://api-ejemplo1-24e88-default-rtdb.firebaseio.com/productos.json';
  angularPlatziCurso3 = `${environment.API_URL}/api/productos.json`;
  product: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    images: [],
    category: {
      id: '',
      name: ''
    },
    description: ''
  };

  constructor(
    private http: HttpClient,
    private firestore: Firestore
  ) { }

  // --------MÉTODOS--------
  getProducts(limit?:number, offset?:number) {
    let params = new HttpParams();
    if(limit && offset) {
      params = params.append('limit', limit);
      params = params.append('offset', offset);
    }
    //console.log('api', this.angularPlatziCurso3);
    return this.http.get<Product[]>(this.angularPlatziCurso3, {params})
    .pipe(
      retry(3), // con observadores se puede usar retry
      map((productsApi) => {
        // calcular los taxes de cada producto
        const products: Product[] = [];
        for (const key in productsApi) {
          if (Object.prototype.hasOwnProperty.call(productsApi, key)) {
            const product = productsApi[key];
            product.id = key;
            product.taxes = product.price * 0.16;
            products.push(product);
          }
        }
        return products;
      })
    );
  }
  getProduct(id: string) {
    let ejemploApiFirebase1get = 'https://angular-platzi-curso3-default-rtdb.firebaseio.com/productos';
    return this.http.get<Product>(`${ejemploApiFirebase1get}/${id}${'.json'}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 404) { // error 404 o httpstatuscode.notfound
          console.log('error 404');
          return throwError('Error 400, no se encontro el producto');
        }else if(error.status === 500) {
          console.log('error 500');
          return throwError('Error 500, error en el servidor');
        } else if(error.status === HttpStatusCode.BadGateway) { // usar numeros, o el tipado de los errores de http
          console.log('error 0');
          return throwError('Error 0, no hay conexion con el servidor');
        }
        return throwError('ups algo salio mal');
      })
    );
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
  fetchReadAndUpdate(id:string, dto: updateProductDTO){
    return zip(
      this.getProduct(id),
      this.update(id, dto)
    );
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
  async getFirestoreById(id:string) {
    if(id === '') return this.product;
    const productRef = doc(this.firestore, 'productos',  id);
    //return await getDoc(productRef);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      //console.log('Document data:', productSnap.data(), productSnap.id);
      // replace the document id with the snapshot id
      this.product = productSnap.data() as Product;
      this.product.id = productSnap.id;
      //console.log('this.product.id: ', this.product.id);
      return this.product as Product;
    }
    return this.product;
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
      query(productRef, orderBy('id'), limit(limitN), startAfter(offset)),  { idField: 'id' }
    ) as Observable<Product[]>;
  }
}
