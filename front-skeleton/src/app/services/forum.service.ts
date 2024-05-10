import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumMessage } from '../models/forum.model';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private apiUrl: string = 'http://localhost:8080/forum';

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<ForumMessage[]> {
    return this.http.get<ForumMessage[]>(`${this.apiUrl}/topics`);
  }

  getRepliesForMessage(messageId: number): Observable<ForumMessage[]> {
    return this.http.get<ForumMessage[]>(`${this.apiUrl}/${messageId}/replies`);
  }

  getMessagesByUser(userId: number): Observable<ForumMessage[]> {
    return this.http.get<ForumMessage[]>(`${this.apiUrl}/user/${userId}`);
  }

  createMessage(message: ForumMessage): Observable<ForumMessage> {
    return this.http.post<ForumMessage>(`${this.apiUrl}/create`, message);
  }
}
