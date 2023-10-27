import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { FilesService } from 'src/app/services/files.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuStatus = false;
  counter = 0;
  user: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    token: ''
  };
  file = '';
  categories: Category[] = [];

  // --------CONSTRUCTOR--------
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private filesService: FilesService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.storeService.cartBehavior$.subscribe((cart) => {
      this.counter = cart.length;
    });
    this.getProfile();
    this.getAllCategories();
  }

  // --------MÉTODOS--------
  ocultarMenu(event: Event) {
    this.menuStatus = !this.menuStatus;
    console.log(event);
  }

  getProfile() {
    this.authService.profile().subscribe((result) => {
      //console.log('result', result);
      this.user = result;
    });
  }

  getAllCategories(){
    this.categoriesService.getAll().subscribe((data) => {
      console.log('categories', data);
      this.categories = data;
    });
  }

}
