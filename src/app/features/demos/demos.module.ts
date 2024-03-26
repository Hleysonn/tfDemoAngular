import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './pages/demo1/demo1.component';
import { Demo2Component } from './pages/demo2/demo2.component';
import { Demo3Component } from './pages/demo3/demo3.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { Demo4Component } from './pages/demo4/demo4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo5Component } from './pages/demo5/demo5.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';

const routes: Routes = [
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component },
  { path: 'demo4', component: Demo4Component },
  { path: 'demo5', component: Demo5Component },
]

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    // nécessaire pour utiliser [(ngModel)]
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FloatLabelModule,
  ],
  providers: [
    { provide: 'resource1', useValue: 44 },
  ]
})
export class DemosModule { }
