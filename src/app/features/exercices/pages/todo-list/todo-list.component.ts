import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  taskName: string|null = null;
  isImportant: boolean = false;

  tasks: Task[] = [];

  add() {
    if(!this.taskName) {
      return;
    }

    this.tasks = [...this.tasks, { 
      name: this.taskName, 
      important: this.isImportant,
      isComplete: false,
    }]

    this.taskName = null;
    this.isImportant = false;
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  check(task: Task) {
    task.isComplete = true;
  }
}
