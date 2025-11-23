import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, insira email e senha';
      return;
    }
    this.errorMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        if (user) {
          if (user.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/cars']);
          }
        } else {
          this.errorMessage = 'Email ou senha inválidos';
        }
      },
      error: (error) => {
        this.errorMessage = 'Ocorreu um erro. Por favor, tente novamente.';
        console.error('Erro no login:', error);
      }
    });
  }
}