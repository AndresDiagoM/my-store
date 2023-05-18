import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'; //importamos el modelo de datos

import { StoreService } from '../../services/store.service'; //importamos el servicio
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements  OnInit {

  // -- Constructor --  //inyectamos el servicio (inyeccion de dependencias)
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.cart = this.storeService.getCart();
    this.total = this.storeService.getTotal();
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((productsApi) => {
      //console.log(products);
      this.products = productsApi;
    });
  }

  // -- Propiedades --
  cart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 5, 1);

  // -- Métodos --
  addToCart(product: Product) {
    //console.log('product', product);
    this.storeService.addToCart(product);
    this.total = this.storeService.getTotal();
  }
}

// se crea un componente con "ng g c components/products"