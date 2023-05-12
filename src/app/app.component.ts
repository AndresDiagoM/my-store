import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({  //esto es un decorador de angular
  selector: 'app-root',
  templateUrl: './app.component.html',  //esta es la conexión con la vista y la clase AppComponent
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App Padre';
  imgParent = "https://static.independent.co.uk/2023/04/11/18/spacex%20starship%20launch%20date%202023.jpg";
  showImg = true;

  products: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      price: 1000,
      image: './assets/images/bike.jpg',
    },
    {
      id: '2',
      name: 'Producto 2',
      price: 2200,
      image: './assets/images/album.jpg',
    },
    {
      id: '3',
      name: 'Producto 3',
      price: 3300,
      image: 'https://www.ngenespanol.com/wp-content/uploads/2023/03/planeta-entre-Marte-y-Jupiter.jpg',
    },
  ]

  //--------MÉTODOS--------

  onLoaded(event: string) {
    console.log("[PADRE] evento recibido desde el hijo: ", event);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
