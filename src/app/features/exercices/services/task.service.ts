import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor() { }

  getAll() {
    return this.tasks;
  }

  add(task: Task) {
    this.tasks.next([...this.tasks.value, task]);
  } 

  remove(task: Task) {
    this.tasks.next(this.tasks.value.filter(t => t !== task));
  }

  check(task: Task) {
    task.isComplete = true;
  }
}
