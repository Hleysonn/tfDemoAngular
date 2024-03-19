import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrl: './menu-link.component.scss'
})
export class MenuLinkComponent {
  @Input()
  nom: string = '';
  @Input()
  link: any = '';
  @Input()
  icon: string = '';
}
