import { Component } from '@angular/core';

@Component({
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {
  nom: string = 'kHuN lY';
  prix: number = 0.1 * 6;
  estMajeur: boolean = false;
  dateNaissance: Date = new Date('1982-05-06T04:30:00');
  temperatureDeLaClasse: number = 301.45;
}
