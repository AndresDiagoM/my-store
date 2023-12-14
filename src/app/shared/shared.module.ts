import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NewProductComponent } from './components/new-product/new-product.component';

import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { Vowels2numPipe } from './pipes/vowels2num.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    TimeAgoPipe,
    ReversePipe,
    Vowels2numPipe,
    HighlightDirective,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    FormsModule,
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    TimeAgoPipe,
    ReversePipe,
    Vowels2numPipe,
    HighlightDirective,
    NewProductComponent,
  ]
})
export class SharedModule { }
