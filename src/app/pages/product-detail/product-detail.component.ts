import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  //---------ATRIBUTOS---------
  productId: string | null = '';
  product: Product | null = null;

  //---------CONSTRUCTOR---------
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

  }
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
  goToBack(id:any) {
    // this.location.back();
    this.router.navigate(['/home']);
  }

}
