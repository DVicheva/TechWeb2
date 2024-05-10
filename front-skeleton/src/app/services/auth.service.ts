import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080/users';
  isLoggedIn: boolean = false;
  userId: number | any;
  username: string | null = null;

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<Users> {
    return this.http.post<Users>(`${this.apiUrl}/login`, { username, password });
  }

  signupUser(username: string, password: string, first_name: string, last_name: string, email: string): Observable<Users> {
    return this.http.post<Users>(`${this.apiUrl}/signup`, { username, password, first_name, last_name, email });
  }
  getUserById(userId: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/login/${userId}`);
  }

  logout() {
    this.isLoggedIn = false;
    this.userId = null;
    this.username = null;
  }

  setUserIdAndUsername(userId: number, username: string): void {
    this.userId = userId;
    this.username = username;
    this.isLoggedIn = true;
  }

  getUserId(): number {
    return this.userId;
  }

  getUsername(): string | null {
    return this.username;
  }



}
