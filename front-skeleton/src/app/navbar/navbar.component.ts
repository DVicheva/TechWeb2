import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Link } from "models/links.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Link[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.links = [
      { name: "Accueil", href: "" },
      { name: "Accessoires", href: "accessoires" },
      { name: "Collections", href: "collections" },
      { name: "Goodies", href: "goodies" },
      { name: "Contacts", href: "contacts" },
      { name: "Panier", href: "panier" }
    ];


  }




  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get usernameFromAuth(): string | null {
    return this.authService.username;
  }
}
