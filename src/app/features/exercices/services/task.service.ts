import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: WritableSignal<Task[]> = signal<Task[]>([]);

  constructor() { 
    this.tasks.set(this.load());
  }

  getAll() {
    return this.tasks;
  }

  add(task: Task) {
    this.tasks.update(t => [...t, task]);
    this.save();
  } 

  remove(task: Task) {
    this.tasks.update(oldT => oldT.filter(t => t !== task));
    this.save();
  }

  check(task: Task) {
    task.isComplete = true;
    this.save();
  }

  private save() {
    localStorage.setItem('TASKS', JSON.stringify(this.tasks()))
  }

  private load() {
    const data: string |null = localStorage.getItem('TASKS');
    if(data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
}
