import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth/auth.service';
import { TokenService } from './services/auth/token.service';

@Component({  //esto es un decorador de angular
  selector: 'app-root',
  templateUrl: './app.component.html',  //esta es la conexión con la vista y la clase AppComponent
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'App Padre';
  imgParent = 'assets/images/starship.avif';
  showImg = true;

  //--------CONSTRUCTOR--------
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.getProfile().subscribe();
    }
  }

  //--------MÉTODOS--------

  onLoaded(event: string) {
    console.log("[PADRE] evento recibido desde el hijo: ", event);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
