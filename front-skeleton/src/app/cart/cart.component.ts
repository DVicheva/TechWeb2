// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';
import { Cart } from '../models/cart.model';
import { Orders } from '../models/orders.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  userId: number | null = null;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.userId !== null) {
      this.loadCartItems(this.userId);
    } else {
      console.error('Utilisateur non authentifié');
    }
  }

  loadCartItems(userId: number): void {
    this.cartService.getCartByUserId(userId).subscribe(
      (items) => {
        this.cartItems = items;
      },
      (error) => console.error('Erreur lors du chargement du panier:', error)
    );
  }

  removeItem(cartId: number): void {
    this.cartService.removeProductFromCart(cartId).subscribe(
      () => this.loadCartItems(this.userId!),
      (error) => console.error('Erreur lors de la suppression du produit:', error)
    );
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  clearCart(): void {
    const cartIds = this.cartItems.map((item) => item.cartId);

    cartIds.forEach((cartId) => {
      this.cartService.removeProductFromCart(cartId).subscribe(
        () => {},
        (error) => console.error('Erreur lors de la suppression du produit:', error)
      );
    });

    // Réinitialiser la liste du panier
    this.cartItems = [];
  }

  validateOrder(): void {
    if (this.userId !== null) {
      const details = this.cartItems
        .map((item) => `${item.product.name}, ${item.quantity}`)
        .join('; ');

      const price = this.getTotalPrice();

      const order: Orders = {
        orderId: 0, // Valeur factice, sera ignorée par le backend
        userId: this.userId,
        orderDate: new Date().toISOString(),
        status: 'En cours',
        details,
        price
      };

      this.ordersService.createOrder(order).subscribe(
        (response) => {
          console.log('Commande validée:', response);
          this.clearCart(); // Vider le panier après validation
        },
        (error) => console.error('Erreur lors de la validation de la commande', error)
      );
    } else {
      console.error('Utilisateur non authentifié');
    }
  }
}
