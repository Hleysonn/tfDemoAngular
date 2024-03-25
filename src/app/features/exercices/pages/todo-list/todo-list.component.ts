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

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getAll();
  }

  add() {
    if(!this.taskName) {
      return;
    }

    this.taskService.add({
      name: this.taskName,
      important: this.isImportant,
      isComplete: false
    });

    this.taskName = null;
    this.isImportant = false;
  }

  delete(task: Task) {
    this.taskService.remove(task);
  }

  check(task: Task) {
    this.taskService.check(task);
  }
}
