import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img', //con este selector es que podemos llamar a este componente en el html de otro componente
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valor: string = "valor inicial en img component";
  // @Input() es para recibir datos desde el componente padre
  @Input() img: string = "";
  imgDefault: string = "https://www.meteorologiaenred.com/wp-content/uploads/2018/07/Planeta-J%C3%BApiter.png";

  @Output() imgLoadedEvent = new EventEmitter<string>();

  //--------MÉTODOS--------
  // @Output() es para enviar datos al componente padre
  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log("[HIJO] imagen cargada (en hijo)");
    this.imgLoadedEvent.emit(this.img); //emitir algo al padre
  }

}

