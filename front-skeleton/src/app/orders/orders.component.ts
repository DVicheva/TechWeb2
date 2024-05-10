import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';
import { Orders } from '../models/orders.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Orders[] = [];

  constructor(
    private ordersService: OrdersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.loadOrders(userId);
    }
  }

  loadOrders(userId: number): void {
    this.ordersService.getOrdersByUserId(userId).subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des commandes', err);
      }
    });
  }
}
