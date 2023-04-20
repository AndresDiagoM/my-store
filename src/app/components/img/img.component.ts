import { Component, OnInit, Input } from '@angular/core';

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

}

