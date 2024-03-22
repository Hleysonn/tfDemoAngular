import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems: any[] = [
    { label: 'Home', icon: 'pi pi-home', link: '/home' },
    { label: 'Demo 1', icon: 'pi pi-book', link: '/demo/demo1' },
    { label: 'Demo 2', icon: 'pi pi-sun', link: '/demo/demo2' },
    { label: 'Demo 3', icon: 'pi pi-moon', link: '/demo/demo3' },
    { label: 'Demo 4', icon: 'pi pi-heart', link: '/demo/demo4' },
    { label: 'Chronomètre', icon: 'pi pi-stopwatch', link: '/exos/chrono' },
    { label: 'IMC', icon: 'pi pi-chart-bar', link: '/exos/imc' },
  ];
}
