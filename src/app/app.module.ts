import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MessageComponent } from './components/message/message.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { Demo1Component } from './pages/demo1/demo1.component';
import { Demo2Component } from './pages/demo2/demo2.component';
import { Page404Component } from './pages/404/404.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { ChronoComponent } from './pages/chrono/chrono.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Demo1Component,
    Demo2Component,
    Page404Component,
    MenuLinkComponent,
    ChronoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
