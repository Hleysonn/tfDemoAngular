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

    return `${this.pad0(h)}:${this.pad0(m)}:${this.pad0(s)}:${this.pad0(ms, 3)}`;
  }

  private pad0(value: number, size: number = 2) {
    return value.toString().padStart(size, '0');
  }
}
