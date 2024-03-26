import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { TaskService } from '../../features/exercices/services/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string|null = null;
  password: string|null = null;

  constructor(private authService: AuthService, private router: Router, private taskService: TaskService) {}

  login() {
    if(this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe({
        next : (response) => {
          localStorage.setItem('TOKEN', response.token);
          this.router.navigate(['/exos/todo']);
          this.taskService.load();
        },
        error: () => {} 
      }) 
    }
  }
}
