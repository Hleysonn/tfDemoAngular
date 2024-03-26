import { Component, EventEmitter, Output, Signal } from '@angular/core';
import { TaskService } from '../../features/exercices/services/task.service';
import { Task } from '../../features/exercices/models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output()
  onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  tasks: Signal<Task[]>

  constructor(private taskService: TaskService, private router: Router) {
    this.tasks = this.taskService.getAll();
  }

  menuOpen = true;

  toggle() {
    this.menuOpen = !this.menuOpen;
    this.onClick.emit(this.menuOpen);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
