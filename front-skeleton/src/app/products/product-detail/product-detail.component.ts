import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {ActivatedRoute} from "@angular/router";
import {Parser} from "@angular/compiler";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = (+params['id']); // Le '+' convertit l'ID en nombre
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    });
  }

  addToCart(product: any) {
    // Implémentez la logique pour ajouter le produit au panier
  }

  buyNow(product: any) {
    // Implémentez la logique pour acheter immédiatement le produit
  }
}
