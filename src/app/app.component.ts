import { Component } from '@angular/core';

@Component({  //esto es un decorador de angular
  selector: 'app-root',
  templateUrl: './app.component.html',  //esta es la conexión con la vista y la clase AppComponent
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'App Padre';
  imgParent = "https://static.independent.co.uk/2023/04/11/18/spacex%20starship%20launch%20date%202023.jpg";
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
