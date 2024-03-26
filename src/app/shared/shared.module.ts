import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MessageComponent } from './components/message/message.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { KelvinToPipe } from './pipes/kelvin-to.pipe';
import { TimerPipe } from './pipes/timer.pipe';
import { RouterModule } from '@angular/router';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [
    CardComponent,
    MessageComponent,
    MenuLinkComponent,
    KelvinToPipe,
    TimerPipe,
    FormErrorComponent,
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
    FormErrorComponent,
  ]
})
export class SharedModule { }
