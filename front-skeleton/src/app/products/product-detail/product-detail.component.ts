import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { AuthService } from '../../services/auth.service';
import { Cart } from '../../models/cart.model';
import { Products } from '../../models/products.model';
import { Orders } from '../../models/orders.model';
import { Users } from '../../models/users.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Products | null = null;
  user: Users | null = null;
  alertMessage: string = '';
  totalPrice: number = 0; // Ajout pour gérer le prix total en fonction de la quantité

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProduct();
    this.loadUser();
  }

  changeQuantity(change: number): void {
    const quantityInput = document.getElementById('quantityNum') as HTMLInputElement;
    if (quantityInput && this.product) {
      let currentQuantity = parseInt(quantityInput.value);
      let newQuantity = currentQuantity + change;

      if (newQuantity < 1) newQuantity = 1;
      if (newQuantity > 99) newQuantity = 99;

      quantityInput.value = newQuantity.toString();
      this.updateTotalPrice(newQuantity);
    }
  }

  updateTotalPrice(newQuantity: number): void {
    if (this.product) {
      this.totalPrice = newQuantity * this.product.price;
    }
  }

  loadProduct(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
        if (this.product) {
          this.updateTotalPrice(1);  // Initialisez totalPrice avec la quantité initiale 1
        }
      });
    });
  }

  loadUser(): void {
    const userId = this.authService.getUserId();
    if (userId !== null) {
      this.authService.getUserById(userId).subscribe(user => {
        this.user = user;
      });
    }
  }

  addToCart(): void {
    if (this.product && this.user) {
      const quantityInput = document.getElementById('quantityNum') as HTMLInputElement;
      const quantity = parseInt(quantityInput.value);

      const cartItem: Cart = {
        cartId: 0,
        user: this.user,
        product: this.product,
        quantity: quantity
      };

      this.cartService.addProductToCart(this.user.user_id, cartItem).subscribe({
        next: () => {
          this.alertMessage = `${this.product?.name} a été ajouté au panier avec ${quantity} unité(s).`;
          setTimeout(() => {
            this.alertMessage = '';
          }, 3000);
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du produit au panier', err);
          this.alertMessage = `Erreur lors de l'ajout de ${this.product?.name} au panier.`;
          setTimeout(() => {
            this.alertMessage = '';
          }, 3000);
        }
      });
    } else {
      this.router.navigate(['/users']);
    }
  }

  buyNow(): void {
    const userId = this.authService.getUserId();
    const quantityInput = document.getElementById('quantityNum') as HTMLInputElement;
    const quantity = parseInt(quantityInput.value);

    if (this.product && userId !== null) {
      const order: Orders = {
        orderId: 0,
        userId: userId,
        orderDate: new Date().toISOString(),
        status: 'En cours',
        details: `[${this.product.name}, ${quantity}]`,
        price: this.totalPrice
      };

      this.ordersService.createOrder(order).subscribe({
        next: () => {
          this.alertMessage = `Achat immédiat de ${this.product?.name} réussi pour ${quantity} unité(s) !`;
          this.router.navigate(['/orders']);

          setTimeout(() => {
            this.alertMessage = '';
          }, 3000);
        },
        error: (err) => {
          console.error('Erreur lors de l\'achat immédiat du produit', err);
          this.alertMessage = `Erreur lors de l'achat de ${this.product?.name}.`;
          setTimeout(() => {
            this.alertMessage = '';
          }, 3000);
        }
      });
    } else {
      this.router.navigate(['/users']);
    }
  }
}
