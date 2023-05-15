import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model'; //importamos el modelo de datos

import { StoreService } from 'src/app/services/store.service'; //importamos el servicio
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

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
  total: number = 0;
  products: Product[] = [];

  // -- Métodos --
  addToCart(product: Product) {
    //console.log('product', product);
    this.storeService.addToCart(product);
    this.total = this.storeService.getTotal();
  }
}

// se crea un componente con "ng g c components/products"