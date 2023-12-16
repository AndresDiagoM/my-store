import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user.model';
import { FilesService } from 'src/app/services/files.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/product.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  menuStatus = false;
  counter = 0;
  user: User | null = null;
  file = '';
  categories: Category[] = [];

  // --------CONSTRUCTOR--------
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private filesService: FilesService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storeService.cartBehavior$.subscribe((cart) => {
      this.counter = cart.length;
    });
    this.getProfile();
    this.getAllCategories();
  }

  // --------MÉTODOS--------
  ocultarMenu(event: Event) {
    // used in mobile only
    this.menuStatus = !this.menuStatus;
    console.log(event);
  }

  getProfile() {
    this.authService.user$.subscribe((result) => {
      console.log('[nav] auth-service profile', result);
      this.user = result;
    });
  }

  getAllCategories() {
    this.categoriesService.getAll().subscribe((data) => {
      console.log('[nav] categories', data);
      this.categories = data;
    });
  }

  logout() {
    this.authService.logout();
    this.user = {
      id: '',
      name: '',
      email: '',
      password: '',
      token: '',
    };
    this.router.navigate(['/login']);
  }
}
