import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronoComponent } from './pages/chrono/chrono.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chrono', component: ChronoComponent }
]

@NgModule({
  declarations: [
    ChronoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule,
  ]
})
export class ExercicesModule { }
