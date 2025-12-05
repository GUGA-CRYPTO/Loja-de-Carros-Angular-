import { Component, AfterViewInit } from '@angular/core';
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

export class LoginComponent implements AfterViewInit {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }
  
  ngAfterViewInit() {
    const video = document.querySelector('.background-video') as HTMLVideoElement;
    if (video) {
      video.muted = true; 
      video.playsInline = true;
      video.play().catch(error => {
        console.error('Erro ao reproduzir o vídeo de fundo:', error);
      });
    }
  }
  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, insira email e senha';
      return;
    }
    this.errorMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        if (!user) {
          this.errorMessage = 'Email ou senha inválidos';
          return;
        }
        const redirect = user.role === 'admin' ? '/admin' : '/cars';
        this.router.navigate([redirect]);
      },
      error: () => {
        this.errorMessage = 'Ocorreu um erro. Por favor, tente novamente.';
      }
    });
  }
}