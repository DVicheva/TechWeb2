import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user: Users | any;

  constructor(private profilService: ProfilService) {}

  ngOnInit() {
    this.chargeProfil();
  }

  chargeProfil() {
    this.profilService.getProfil(this.user.userId).subscribe({
      next: (data) => this.user = data,
      error: (err) => console.error(err),
    });
  }

  modifierInfos(updatedUser: Users) {
    if (this.user) {
      this.profilService.updateProfil(this.user.userId, updatedUser).subscribe({
        next: (data) => this.user = data,
        error: (err) => console.error(err),
      });
    }
  }
}
