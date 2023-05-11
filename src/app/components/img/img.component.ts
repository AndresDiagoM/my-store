import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img', //con este selector es que podemos llamar a este componente en el html de otro componente
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor() {
    //before render
    // aqui no se debe correr nada asincrono
    console.log("constrcutor de img component", "img: ", this.img);
  }

  ngOnChanges() { //implements OnChanges, hay que declarar el método ngOnChanges
    // before and on the life cycle
    // esta funcion está pendiente de los cambios de los inputs
    console.log("ngOnChanges de img component", "img: ", this.img);
  }

  ngOnInit(): void {
    // before render
    // aqui se puede correr algo asincrono - fecth, promesas, etc
    console.log("ngOnInit de img component", "img: ", this.img);
  }

  ngAfterViewInit() {
    // after render
    // aqui se maneja los hijos del componente
    console.log("ngAfterViewInit de img component");
  }

  ngOnDestroy() {
    // before destroy
    // aqui se limpian los observables, intervalos, etc
    console.log("ngOnDestroy de img component");
  }

  //--------Propiedades--------

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

