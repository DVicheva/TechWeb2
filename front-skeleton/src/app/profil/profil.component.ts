import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Users } from '../models/users.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user: Users | any;

  constructor(private profilService: ProfilService, private authService: AuthService) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    if (this.authService.getUsername()) {
      this.profilService.getUserByUsername(this.authService.getUsername()).subscribe({
        next: (data) => this.user = data,
        error: (err) => console.error('Erreur lors de la récupération du profil :', err),
      });
    } else {
      console.error('Aucun nom d\'utilisateur trouvé dans AuthService');
    }
  }

  updateProfile() {
    if (this.user && this.user.id) {
      this.profilService.updateProfil(this.user.id, this.user).subscribe({
        next: (data) => {
          this.user = data;
          alert('Profil mis à jour avec succès!');
        },
        error: (err) => console.error('Erreur lors de la mise à jour du profil :', err)
      });
    }
  }
}

