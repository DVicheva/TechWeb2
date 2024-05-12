import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';  // Ajout pour stocker le terme de recherche
  currentPage: number = 0;
  itemsPerPage: number = 8;
  maxPage: number = 0;
  private carouselInterval!: number;
  private productsSubscription!: Subscription;
  priceMin: number = 0;
  priceMax: number = 10000;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.filteredProducts = data;
      this.maxPage = Math.ceil(data.length / this.itemsPerPage);
    });
  }

  ngAfterViewInit(): void {
    this.setupCarousel();
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    this.productsSubscription.unsubscribe();
  }

  searchProducts(): void {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    this.maxPage = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.currentPage = 0;  // Reset to the first page
    console.log(`Found ${this.filteredProducts.length} products matching '${this.searchTerm}'`);
  }

  setupCarousel(): void {
    const slides = document.getElementsByClassName('carousel-item') as HTMLCollectionOf<HTMLElement>;
    let currentIndex = parseInt(localStorage.getItem('carouselIndex') || '0', 10);
    if (slides && slides[currentIndex]) {
      slides[currentIndex].classList.add('active');
    }
    this.carouselInterval = window.setInterval(() => {
      let activeFound = false;
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
          slides[i].classList.remove('active');
          activeFound = true;
          let nextIndex = i + 1 === slides.length ? 0 : i + 1;
          slides[nextIndex].classList.add('active');
          localStorage.setItem('carouselIndex', nextIndex.toString());
          break;
        }
      }
      if (!activeFound && slides.length > 0) {
        slides[0].classList.add('active');
        localStorage.setItem('carouselIndex', '0');
      }
    }, 3000);
  }

  applyFilter(): void {
    this.filteredProducts = this.products.filter(product =>
      product.price >= this.priceMin && product.price <= this.priceMax);
    this.maxPage = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.currentPage = 0; // Reset to first page after filtering
    console.log(`Filtered products count: ${this.filteredProducts.length}`);
  }

  setPage(pageIndex: number): void {
    this.currentPage = pageIndex;
  }

  testClick(): void {
    console.log('Click detected');
  }
}
