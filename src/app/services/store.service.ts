import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

//importar la libreria para los observables
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // storeservice se encarga de la manipulacion del carrito de compras

  //--------Propiedades--------
  cart: Product[] = [];
  total = 0;
  cartBehavior = new BehaviorSubject<Product[]>([]); // es un estado
  cartBehavior$ = this.cartBehavior.asObservable();
  //subscribtor de cartBehavior, se caracteriza con un signo pesos al final

  constructor() { }

  //--------MÉTODOS--------
  addToCart(product: Product) {
    //console.log('product', product);
    this.cart.push(product);
    this.cartBehavior.next(this.cart); //notificar a los subscriptores
  }
  getCart(){
    return this.cart;
  }
  getTotal(){
    this.total = 0;
    this.cart.forEach(product => {
      this.total = this.total + product.price;
    });
    return this.total;
  }
}
