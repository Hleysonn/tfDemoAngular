import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './pages/demo1/demo1.component';
import { Demo2Component } from './pages/demo2/demo2.component';
import { Demo3Component } from './pages/demo3/demo3.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { Demo4Component } from './pages/demo4/demo4.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component },
  { path: 'demo4', component: Demo4Component },
]

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    // nécessaire pour utiliser [(ngModel)]
    FormsModule,
  ],
  providers: [
    { provide: 'resource1', useValue: 44 },
  ]
})
export class DemosModule { }
