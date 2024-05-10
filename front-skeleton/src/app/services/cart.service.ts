// cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/cart';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  addProductToCart(userId: number, cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/${userId}/add`, cart, this.httpOptions);
  }

  getCartByUserId(userId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/${userId}`);
  }

  removeProductFromCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cartId}/remove`);
  }
}
