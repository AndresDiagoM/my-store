import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { FilesService } from 'src/app/services/files.service';

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

  // --------CONSTRUCTOR--------
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private filesService: FilesService
  ) { }

  ngOnInit(): void {
    this.storeService.cartBehavior$.subscribe((cart) => {
      this.counter = cart.length;
    });
    this.getProfile();
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

  descargarPDF() {
    this.filesService.getFiles('platzi', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf').subscribe((result) => {
      //console.log('result', result);
    });
  }

  cargarArchivo(event: Event) {
    const element = (event.target as HTMLInputElement);
    const file = element.files?.item(0);
    if(file) {
      this.filesService.uploadFile(file).subscribe((result) => {
        console.log('[app-nav] upload', result);
        this.file = result.location; // de la interfaz FileResponse en files.service.ts
      });
    }
  }

}
