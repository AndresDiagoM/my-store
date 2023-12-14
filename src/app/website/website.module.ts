import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';

// -------------- Pages import ---------------------
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

// -------------- Components import ----------------
import { RegisterComponent } from './components/register/register.component';
import { RecapComponent } from './components/recap/recap.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { LoginComponent } from './components/login/login.component';
import { FilesComponent } from './components/files/files.component';
import { LayoutComponent } from './components/layout/layout.component';

import { ReversePipe } from './pipes/reverse.pipe';
import { Vowels2numPipe } from './pipes/vowels2num.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    ReversePipe,
    Vowels2numPipe,
    HighlightDirective,
    RegisterComponent,
    RecapComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    NewProductComponent,
    LoginComponent,
    FilesComponent,
    HomeComponent,
    CategoryComponent,
    MycartComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    FormsModule,
  ],
})
export class WebsiteModule {}
