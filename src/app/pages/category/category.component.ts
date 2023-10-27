import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  // --------------------- Properties ---------------------
  categoryId: string | null = this.route.snapshot.paramMap.get('id') || '';
  limit = 10;
  offset = 0;
  products: Product[] = [];

  // --------------------- Constructor ---------------------
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.categoryId = params.get('id');
        if (this.categoryId) {
          return this.productsService.getByCategory(this.categoryId, this.offset, this.limit);
        }
        return [];
      })
    )
    .subscribe((data) => {
      this.products = data;
    });
  }

  // --------------------- Methods ---------------------
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
