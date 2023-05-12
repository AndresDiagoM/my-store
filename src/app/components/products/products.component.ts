import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model'; //importamos el modelo de datos

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  // -- Propiedades --
  cart: Product[] = [];
  total: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      price: 1000,
      image: './assets/images/bike.jpg',
    },
    {
      id: '2',
      name: 'Producto 2',
      price: 2200,
      image: './assets/images/album.jpg',
    },
    {
      id: '3',
      name: 'Producto 3',
      price: 3300,
      image: 'https://www.ngenespanol.com/wp-content/uploads/2023/03/planeta-entre-Marte-y-Jupiter.jpg',
    },
    {
      id: '4',
      name: 'Producto 4',
      price: 4400,
      image: 'https://concepto.de/wp-content/uploads/2020/03/saturno-e1585016761130.jpg',
    },
  ];

  // -- Métodos --
  addToCart(product: Product) {
    //console.log('product', product);
    this.cart.push(product);
    this.total = this.total + product.price;
  }
}

// se crea un componente con "ng g c components/products"