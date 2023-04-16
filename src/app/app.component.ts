import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({  //esto es un decorador de angular
  selector: 'app-root',
  templateUrl: './app.component.html',  //esta es la conexión con la vista y la clase AppComponent
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'Andres';
  public age = 30;
  public image = 'https://pbs.twimg.com/profile_images/953895184873467904/dRwouVDQ_400x400.jpg';
  btnDisabled = true;
  items = ['Andres', 'Julian', 'Felipe', 'Juan'];
  newItem = '';
  products: Product[] = [
    {
      name: 'Producto 1',
      price: 1000,
      image: 'https://picsum.photos/200/300',
      description: 'All'
    },
    {
      name: 'Producto 2',
      price: 2000,
      image: 'https://picsum.photos/200/300'
    },
    {
      name: 'Producto 3',
      price: 3000,
      image: 'https://picsum.photos/200/300'
    },
    {
      name: 'Bike',
      price: 4000,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Album',
      price: 5000,
      image: './assets/images/album.jpg'
    },
  ];

  person = {
    name: 'Andres',
    age: 30,
    address: {
      street: 'Calle falsa 123',
      city: 'Bogota',
      country: 'Colombia'
    },
    avatar: 'https://pbs.twimg.com/profile_images/953895184873467904/dRwouVDQ_400x400.jpg'
  }

  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  public cumpleanhos(){
    this.person.age++;
  }

  public onScroll(event: Event) {
    const element = event.target as HTMLElement; //esto es un casting
    //console.log(element.scrollTop);
  }

  public changeName(event: Event) {
    const element = event.target as HTMLInputElement; //esto es un casting
    //console.log(element.value);
    this.person.name = element.value;
  }

  public addItem() {
    this.items.push(this.newItem);
    this.newItem = '';
  }

  public deleteItem(index: number) {
    this.items.splice(index, 1); //cuantos elementos se borran a partir de la posición index
  }
}  //esto ya está conectado a la vista de app.component.html
