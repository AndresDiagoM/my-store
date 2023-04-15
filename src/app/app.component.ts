import { Component } from '@angular/core';

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
}  //esto ya está conectado a la vista de app.component.html
