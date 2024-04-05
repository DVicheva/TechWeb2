import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from "../models/users.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getProfil(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  updateProfil(id: number, user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiUrl}/${id}`, user);
  }
}
