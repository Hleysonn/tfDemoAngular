import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent implements OnDestroy {
  timeEllapse: number = 0;
  intervalId: any;
  memo: number = 0;

  start() {
    if(this.intervalId) {
      return;
    }
    const start = new Date().getTime();
    this.intervalId = setInterval(() => {
      this.timeEllapse = new Date().getTime() - start + this.memo;
    }, 1);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    this.memo = this.timeEllapse;
  }

  reset() {
    this.stop();
    this.timeEllapse = 0;
    this.memo = 0;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
