import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { QuicklinkModule } from 'ngx-quicklink';

// -------------- Pages import ---------------------
import { HomeComponent } from './pages/home/home.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

// -------------- Components import ----------------
import { RegisterComponent } from './components/register/register.component';
import { RecapComponent } from './components/recap/recap.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { FilesComponent } from './components/files/files.component';

import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RecapComponent,
    NavComponent,
    LoginComponent,
    FilesComponent,
    HomeComponent,
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
    SharedModule,
    // QuicklinkModule,
  ],
})
export class WebsiteModule {}
