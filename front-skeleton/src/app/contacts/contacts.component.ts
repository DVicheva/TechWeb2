import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  showPopup: boolean = false;

  constructor() { }

  onSubmit() {
    if (this.name && this.email && this.message) {
      this.showPopup = true;
      setTimeout(() => this.showPopup = false, 3000);
      // Réinitialiser les champs après l'affichage du popup
      this.resetForm();
    } else {
      alert('Tous les champs sont requis pour envoyer le message.');
    }
  }
  // Méthode pour réinitialiser le formulaire
  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
