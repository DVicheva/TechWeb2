import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { Users } from "../models/users.model"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080/connexion';
  isLoggedIn: boolean = false;
  username: string | null = null;

  constructor(private http: HttpClient) {
  }

  loginUser(username: string, password: string): Observable<Users> {
    // Envoi de la demande de connexion au backend
    return this.http.post<Users>(`${this.apiUrl}/login`, {username, password});
  }

  logout() {
    // Déconnexion de l'utilisateur
    this.isLoggedIn = false;
    this.username = null;
  }




}
