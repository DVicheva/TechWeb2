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
      { name: "Accueil", href: "products" },
      { name: "Accessoires", href: "accessoires" },
      { name: "Forum", href: "forum" },
      { name: "Orders", href: "orders" },
      { name: "Contacts", href: "contacts" },
      { name: "Panier", href: "cart" }
    ];


  }
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get usernameFromAuth(): string | null {
    return this.authService.getUsername();
  }
}
