import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { Page404Component } from './pages/404/404.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    // la ressource est partagée dans toute l'application
    { provide: 'resource1', useValue: 42 },
    // la ressource est partagée depuis le service
    // { provide: TaskService, useClass: TaskService }
    // TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
