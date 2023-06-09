import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent {
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
  color = 'red';
  imgWidth = 200;
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

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

  register = {
    name: '',
    email: '',
    password: '',
  }

  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  public cumpleanhos(){
    this.person.age++;
  }

  public onScroll(event: Event) {
    const element = event.target as HTMLElement; //esto es un casting
    console.log(element.scrollTop);
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

  public changeColor(event: Event) {
    const element = event.target as HTMLInputElement;
    this.color = element.value;
  }

  public onRegister() {
    console.log(this.register);
  }
}
