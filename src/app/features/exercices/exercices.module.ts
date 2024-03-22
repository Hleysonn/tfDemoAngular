import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronoComponent } from './pages/chrono/chrono.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './pages/imc/imc.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'chrono', component: ChronoComponent },
  { path: 'imc', component: ImcComponent },
]

@NgModule({
  declarations: [
    ChronoComponent,
    ImcComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule,
    InputNumberModule,
    FloatLabelModule,
    CardModule,
    FormsModule,
  ]
})
export class ExercicesModule { }
