import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Users } from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getUserByUsername(username: string | null): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${username}`);
  }

  updateProfil(id: number, user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiUrl}/${id}`, user);
  }
}
