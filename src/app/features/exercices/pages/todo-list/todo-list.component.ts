import { Component, Signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  taskName: string|null = null;
  isImportant: boolean = false;

  tasks: Signal<Task[]>;

  isLoading: boolean = false;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getAll();
  }

  add() {
    if(!this.taskName) {
      return;
    }

    this.isLoading = true;
    this.taskService.add({
      name: this.taskName,
      important: this.isImportant,
      isComplete: false
    }).subscribe({
      next: () => { this.isLoading = false; }
    });

    this.taskName = null;
    this.isImportant = false;
  }

  delete(task: Task) {
    this.isLoading = true;
    this.taskService.remove(task).subscribe({
      next: () => { this.isLoading = false; }
    });
  }

  check(task: Task) {
    if(this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.taskService.check(task).subscribe({
      // si la requete à fonctionner
      next: () => { this.isLoading = false; },
      // sinon
      error: () => {}
    });
  }
}
