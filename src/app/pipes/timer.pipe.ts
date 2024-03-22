import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {

    let ms = value % 1000;
    let s = Math.floor(value / 1000) % 60;
    let m = Math.floor(value / 60000) % 60;
    let h = Math.floor(value / 3600000);

    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;
  }

}
