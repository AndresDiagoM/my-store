import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -------------- Pages import ---------------------
import { HomeComponent } from './pages/home/home.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

// -------------- Components import ----------------
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FilesComponent } from './components/files/files.component';

import { AuthGuard } from '../guards/auth.guard';

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
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'category', // :id es para recibir un parámetro por url
        loadChildren: () =>
          import('./pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
        data: { preload: true }, // false o comentario para no precargar, y cargar en demanda (lazy load)
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'files',
        component: FilesComponent,
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
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
