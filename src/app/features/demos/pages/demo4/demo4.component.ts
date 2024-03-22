import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})
export class Demo4Component {
  nombre: number|undefined;

  nombreAuCarre!: number;

  click() {
    if(!this.nombre) {
      return;
    }
    this.nombreAuCarre = this.nombre * this.nombre;
    this.nombre = undefined;
  }
}
