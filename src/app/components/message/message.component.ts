import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input()
  color: 'success'|'info'|'danger'|'warning' = 'info';
  @Input()
  message: string = '';

  show: boolean = true;

  hide() {
    this.show = false;
  }
}
