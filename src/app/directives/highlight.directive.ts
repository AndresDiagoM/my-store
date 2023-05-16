import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //el HostListener es para escuchar eventos del elemento html
  @HostListener('mouseenter') onMouseEnter() {
		//girar el texto 20 grados
    this.element.nativeElement.style.transform = 'rotate(10deg)';
    //colocar unos segundos de transición
    this.element.nativeElement.style.transition = 'all 0.5s';
  }
  @HostListener('mouseleave') onMouseLeave() {
		//girar el texto 0 grados
    this.element.nativeElement.style.transform = 'rotate(0deg)';
  }

  constructor(
    private element: ElementRef
  ) {
    //console.log(this.element);
    //this.element.nativeElement.style.backgroundColor = 'green';
  }

  //las directivas son para manipular el DOM
  //para usar la directiva en un elemento html, se usa asi: <p appHighlight>hola</p>
}
