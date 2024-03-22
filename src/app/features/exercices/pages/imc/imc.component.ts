import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.scss'
})
export class ImcComponent {
  taille: number|undefined; // cm
  poids: number|undefined; // kg

  imc: number|undefined;

  calculer() {
    if(!this.poids || !this.taille) {
      return;
    }
    this.imc = this.poids / ((this.taille/100)**2);
  }

  reset() {
    this.taille = undefined;
    this.poids = undefined;
    this.imc = undefined;
  }
}
