import { Component, EventEmitter, OnDestroy, Output, Signal } from '@angular/core';
import { TaskService } from '../../features/exercices/services/task.service';
import { Task } from '../../features/exercices/models/task.model';
import { Subscription } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {
  @Output()
  onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  tasks!: Signal<Task[]>;

  // subscriptions: Subscription;

  constructor(private taskService: TaskService) {
    // this.subscriptions = this.taskService.getAll().subscribe(data => {
    //   this.tasks = data;
    // });
    toSignal(this.taskService.getAll());
  }
  ngOnDestroy(): void {
    //this.subscriptions.unsubscribe();
  }

  menuOpen = true;

  toggle() {
    this.menuOpen = !this.menuOpen;
    this.onClick.emit(this.menuOpen);
  }
}
