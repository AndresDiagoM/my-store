import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  constructor () { }

  ngOnInit(): void {
  }

  //--------Propiedades--------
  @Input() product: Product = {
    id: '',
    name: '',
    price: 0,
    image: '',
  }
  @Output() addedProduct = new EventEmitter<Product>();

  //--------MÉTODOS--------
  addProduct() {
    this.addedProduct.emit(this.product);
  }
}
