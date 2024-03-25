import { Component, Inject } from '@angular/core';
import { TaskService } from '../../features/exercices/services/task.service';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    @Inject('resource1') resource1: number,
    resource2: TaskService,
  ) {
    console.log(resource1);
    console.log(resource2);
  }
}
