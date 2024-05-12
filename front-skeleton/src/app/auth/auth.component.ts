import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Users } from '../models/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  tab: 'login' | 'signup' = 'login';
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  signupUsername: string = '';
  signupPassword: string = '';
  signupFirstName: string = '';
  signupLastName: string = '';
  signupEmail: string = '';

  constructor(protected authService: AuthService, private router: Router) {
    this.loadRememberMe();
  }

  setTab(tab: 'login' | 'signup') {
    this.tab = tab;
  }

  login() {
    this.authService.loginUser(this.username, this.password).subscribe({
      next: (user: Users) => {
        if (user) {
          this.authService.setUserIdAndUsername(user.user_id, user.username);
          console.log(user.user_id);
          this.router.navigate(['/products']);
          this.saveRememberMe();
        }
      },
      error: (error) => {
        console.error('Erreur de connexion', error);
        alert('Utilisateur ou mot de passe incorecte');
      }
    });
  }

  signup() {
    this.authService.signupUser(this.signupUsername, this.signupPassword, this.signupFirstName, this.signupLastName, this.signupEmail).subscribe({
      next: (user: Users) => {
        if (user) {
          this.authService.setUserIdAndUsername(user.user_id, user.username);
          this.router.navigate(['/products']);
          this.saveRememberMe();
        }
      },
      error: (error) => {
        console.error('Erreur d\'inscription', error);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/users']);
  }
  showPassword = false
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  showForgotPasswordMessage() {
    alert('Dommage! La fonctionnalité de récupération du mot de passe n\'est pas disponible pour le moment.');
  }
  saveRememberMe() {
    if (this.rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('username', this.username);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('username');
    }
  }

  loadRememberMe() {
    const rememberMeStored = localStorage.getItem('rememberMe');
    this.rememberMe = rememberMeStored === 'true';
    if (this.rememberMe) {
      this.username = localStorage.getItem('username') || '';
    }
  }
}
