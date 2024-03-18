import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  produits: any[] = [
    { titre: 'Coca cola', contenu: 'Boisson sucrée pas bonne pour la santé', image: 'https://m.media-amazon.com/images/I/5156FefjlqL.jpg' },
    { titre: 'Fanta orange', contenu: 'Boisson au goût orange', image: 'https://www.coca-cola.com/content/dam/onexp/be/fr/brands/fanta/REN2308-00183_BIC_FO_CANSLK_330ml_BEL%20_%20LUX_FR_D_Closed_5000112638783_724.png' },
    { titre: 'Dr pepper', contenu: 'Boisson à goût ???', image: 'https://mesbonbons.net/871-large_default/dr-pepper-23-flavour-33-cl.jpg' }
  ]

  constructor() {
  }
}
