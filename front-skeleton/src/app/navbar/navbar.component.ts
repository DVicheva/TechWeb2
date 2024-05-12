import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Link } from 'models/links.model'; // Assurez-vous que le chemin d'accès est correct

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Link[] = [];
  panierStyle: Link = {
    name: "Panier",
    href: "panier",
    underlineStyle: {},
    iconStyle: {}
  };
  connexionStyle: Link = {
    name: "Connexion",
    href: "connexion",
    underlineStyle: {},
    iconStyle: {}
  };


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.links = [
      { name: "Accueil", href: "products", underlineStyle: {}, iconStyle: {} },
      { name: "Forum", href: "forum", underlineStyle: {}, iconStyle: {} },
      { name: "Commandes", href: "orders", underlineStyle: {}, iconStyle: {} },
      { name: "Contacts", href: "contacts", underlineStyle: {}, iconStyle: {} },

    ];
  }

  toggleUnderline(link: Link, isHovering: boolean): void {
    if (isHovering) {
      link.underlineStyle = { width: '70%' };
      link.iconStyle = {
        opacity: '1',
        transform: 'translateX(-0%)'
      };
    } else {
      link.underlineStyle = { width: '0' };
      link.iconStyle = {
        opacity: '0',
        transform: 'translateX(-110%)'
      };
    }
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get usernameFromAuth(): string | null {
    return this.authService.username;
  }
}
