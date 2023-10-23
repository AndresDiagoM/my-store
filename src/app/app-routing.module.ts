import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { FilesComponent } from './components/files/files.component'

// pages import
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'catalogo', component: ProductsComponent
  },
  {
    path: 'files', component: FilesComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'mycart', component: MycartComponent
  },
  {
    path: 'recovery', component: RecoveryComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
