import { Component, Signal } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuOpen: boolean = true;

  isLoading: Signal<boolean>

  constructor(private loaderService: LoaderService) {
    this.isLoading = loaderService.isLoading;
  }
}
