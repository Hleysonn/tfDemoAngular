import { Component, OnDestroy, Signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnDestroy {
  taskName: string|null = null;
  isImportant: boolean = false;

  tasks!: Task[];

  subscription: Subscription

  constructor(private taskService: TaskService) {
    this.subscription = taskService.getAll().subscribe(data => {
      this.tasks = data;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
