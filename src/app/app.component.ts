import { Component } from '@angular/core';

@Component({  //esto es un decorador de angular
  selector: 'app-root',
  templateUrl: './app.component.html',  //esta es la conexión con la vista y la clase AppComponent
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'App Padre';
  imgParent = 'assets/images/starship.avif';
  showImg = true;

  //--------CONSTRUCTOR--------
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor( ) {}

  //--------MÉTODOS--------

  onLoaded(event: string) {
    console.log("[PADRE] evento recibido desde el hijo: ", event);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
