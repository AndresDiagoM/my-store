import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model'; //importamos el modelo de datos

import { StoreService } from 'src/app/services/store.service'; //importamos el servicio
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements  OnInit {

  // -- Propiedades --
  cart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 5, 1);
  detailState = false;
  productDetail: Product = {
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

  // -- Constructor --  //inyectamos el servicio (inyeccion de dependencias)
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.cart = this.storeService.getCart();
    this.total = this.storeService.getTotal();
  }

  ngOnInit(): void { // Asincrono
    this.productsService.getProducts().subscribe((productsApi) => {
      //console.log(productsApi);
      /**
       * "0": {
            "category": {
              "id": 4,
              "name": "Toys",
              "typeImg": "any"
            },
            "description": "seat and back for all-day comfort and support",
            "id": 1,
            "images": [
              "https://placeimg.com/640/480/any?r=0.3398371381896623",
              "https://placeimg.com/640/480/any?r=0.7148954869451813",
              "https://placeimg.com/640/480/any?r=0.7447492328272423"
            ],
            "price": 138,
            "title": "Awesome Wooden Soap"
          },
       */
      // formatear los datos
      for (const key in productsApi) {
        if (Object.prototype.hasOwnProperty.call(productsApi, key)) {
          const product = productsApi[key];
          this.products.push(product);
        }
      }
      //this.products = productsApi;
    });
  }

  // -- Métodos --
  addToCart(product: Product) {
    //console.log('product', product);
    this.storeService.addToCart(product);
    this.total = this.storeService.getTotal();
  }
  closeDetail() {
    this.detailState = !this.detailState;
  }
  onShowDetail(id: string) {
    this.detailState = !this.detailState;
    this.productsService.getProduct(id).subscribe((product) => {
      this.productDetail = product;
      //console.log('product', product);
    });
  }
}

// se crea un componente con "ng g c components/products"