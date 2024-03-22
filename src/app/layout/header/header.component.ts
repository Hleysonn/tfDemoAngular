import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output()
  onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuOpen = true;

  toggle() {
    this.menuOpen = !this.menuOpen;
    this.onClick.emit(this.menuOpen);
  }
}
