import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  //---------ATRIBUTOS---------
  productId: string | null = '';
  product: Product | null | undefined = null;

  //---------CONSTRUCTOR---------
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.productId = params.get('id');
          if (this.productId) {
            return this.productsService.getFirestoreById(this.productId);
          }
          return [];
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.product = data;
      });
  }

  //---------MÉTODOS---------
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  goToBack(id: any) {
    this.location.back();
  }
}
