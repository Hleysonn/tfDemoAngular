import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MessageComponent } from './components/message/message.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { KelvinToPipe } from './pipes/kelvin-to.pipe';
import { TimerPipe } from './pipes/timer.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    MessageComponent,
    MenuLinkComponent,
    KelvinToPipe,
    TimerPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
    MessageComponent,
    MenuLinkComponent,
    KelvinToPipe,
    TimerPipe,
  ]
})
export class SharedModule { }
