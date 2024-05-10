import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl: string = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  createOrder(order: Orders): Observable<any> {
    const url = `${this.apiUrl}/create`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, order, { headers });
  }

  getOrdersByUserId(userId: number): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.apiUrl}/user/${userId}`);
  }
}
