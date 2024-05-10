// product-detail.component.ts
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

  loadProduct(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
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
      const cartItem: Cart = {
        cartId: 0,
        user: this.user,
        product: this.product,
        quantity: 1
      };

      this.cartService.addProductToCart(this.user.user_id, cartItem).subscribe({
        next: () => {
          this.alertMessage = `${this.product?.name} a été ajouté au panier.`;

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
    if (this.product && userId !== null) {
      const order: Orders = {
        orderId: 0,
        userId: userId,
        orderDate: new Date().toISOString(),
        status: 'En cours',
        details: `[${this.product.name}, 1]`,
        price: this.product.price
      };

      this.ordersService.createOrder(order).subscribe({
        next: () => {
          this.alertMessage = `Achat immédiat de ${this.product?.name} réussi !`;
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
