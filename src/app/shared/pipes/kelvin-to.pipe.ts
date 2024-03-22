import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinTo'
})
export class KelvinToPipe implements PipeTransform {

  transform(value: number, format: 'C'|'F'): string {

    if(value < 0) {
      return 'Valeur impossible';
    }

    if(format === 'C') {
      return (value - 273.15).toFixed(2) + '°C';
    } else {
      return ((value - 273.15) * (9/5) + 32).toFixed(2) + '°F';
    }
  }

}
