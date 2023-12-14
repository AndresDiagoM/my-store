import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowels2num'
})
export class Vowels2numPipe implements PipeTransform {

  transform(value: string): string {
    // reemplazar las variables por el valor que se le pasa
    return value.replace(/[aeiou]/g, '1');
  }

}
