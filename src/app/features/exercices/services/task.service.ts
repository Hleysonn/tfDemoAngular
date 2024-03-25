import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: WritableSignal<Task[]> = signal<Task[]>([]);

  constructor() { }

  getAll() {
    return this.tasks;
  }

  add(task: Task) {
    this.tasks.update(t => [...t, task]);
  } 

  remove(task: Task) {
    this.tasks.update(oldT => oldT.filter(t => t !== task));
  }

  check(task: Task) {
    task.isComplete = true;
  }
}
