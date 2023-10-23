import { Component } from '@angular/core';

import { StoreService } from '../../services/store.service'; //importamos el servicio
import { ProductsService } from '../../services/products.service';
import { Product, createProductDTO, Category } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // -- Propiedades --
  products: Product[] = [];
  offset = 0;
  limit = 10;

  // -- Constructor --
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void { // Asincrono
    // this.productsService.getProducts().subscribe((products) => {
    //   this.products = products;
    // });
    // Con Firestore
    this.productsService.getPageFirestore(this.offset.toString(),this.limit).subscribe((products) => {
      //console.log('products', products[0]);
      this.products = products;
    });
  }

  // --------- METODOS ----------

  // -- Metodos de paginacion --
  pagination(received: String){
    if(received == 'next'){
      this.nextPage();
    }else{
      this.prevPage();
    }
  }
  nextPage() {
    this.offset += this.limit;
    this.productsService.getPageFirestore(this.offset.toString(), this.limit).subscribe((products) => {
      this.products = products;
    });
  }
  prevPage() {
    this.offset -= this.limit;
    this.productsService.getPageFirestore(this.offset.toString(), this.limit).subscribe((products) => {
      this.products = products;
    });
  }
}
