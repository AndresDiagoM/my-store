import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //--------Propiedades--------
  cart: Product[] = [];
  total: number = 0;

  constructor() { }

  //--------MÉTODOS--------
  addToCart(product: Product) {
    //console.log('product', product);
    this.cart.push(product);
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
