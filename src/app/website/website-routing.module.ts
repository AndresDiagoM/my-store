import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -------------- Pages import ---------------------
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

// -------------- Components import ----------------
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FilesComponent } from './components/files/files.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'catalogo',
        component: ProductsComponent,
      },
      {
        path: 'files',
        component: FilesComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'category/:id', // :id es para recibir un parámetro por url
        component: CategoryComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'my-cart',
        component: MycartComponent,
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
