import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  //--------Propiedades--------
  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    images: [],
    category: {
      id: '',
      name: '',
    },
    description: '',
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetailProduct = new EventEmitter<string>();

  //--------Constructor--------
  constructor(private router: Router) {} // Inject the Router service

  //--------MÉTODOS--------
  addProduct() {
    this.addedProduct.emit(this.product);
  }
  showDetail() {
    this.showDetailProduct.emit(this.product.id);
    this.router.navigate(['/product', this.product.id]);
  }
}
