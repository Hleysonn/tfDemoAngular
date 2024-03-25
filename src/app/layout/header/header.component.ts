import { Component, EventEmitter, Output, Signal } from '@angular/core';
import { TaskService } from '../../features/exercices/services/task.service';
import { Task } from '../../features/exercices/models/task.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output()
  onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  tasks: Signal<Task[]>

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getAll();
  }

  menuOpen = true;

  toggle() {
    this.menuOpen = !this.menuOpen;
    this.onClick.emit(this.menuOpen);
  }
}
