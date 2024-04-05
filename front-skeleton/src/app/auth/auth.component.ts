import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Users } from "../models/users.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  username: string = '';
  password: string = '';


  constructor(protected authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginUser(this.username, this.password)
      .subscribe({
        next: (user: Users) => {
          if (user) {
            // Connexion réussie, rediriger l'utilisateur
            this.authService.isLoggedIn = true;
            this.authService.username = this.username;
            this.router.navigate(['products']);
          } else {
            // Gérer le cas où l'utilisateur n'est pas retourné malgré une réponse 200 (si nécessaire)
          }
        },
        error: (error) => {
          // Gérer les erreurs de connexion ici
          console.error('Erreur de connexion', error);
        }
      });
  }

  logout() {
    // Déconnexion de l'utilisateur
    this.authService.logout();
  }


}
