import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  template: `
    <div class="product-grid">
      @for (product of products; track product.id) {
      <mat-card class="product-card">
        <img mat-card-image [src]="product.image" [alt]="product.name" />
        <mat-card-title>{{ product.name }}</mat-card-title>
        <mat-card-content class="content">
          <p>{{ product.description }}</p>
        </mat-card-content>
        <div class="filler"></div>
        <mat-card-actions class="footer">
          <strong>{{ product.price | currency }}</strong>
          <button
            mat-button
            color="primary"
            (click)="addToCart(product)"
            class="add-to-cart-button"
          >
            Add to Cart
          </button>
        </mat-card-actions>
      </mat-card>
      }
    </div>
  `,
  styles: [
    `
      .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 16px;
      }
      .mat-mdc-card-content {
        font-family: 'Indie Flower' !important;
      }
      .product-card {
        max-width: 100%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .filler {
        flex-grow: 1;
      }
      .add-to-cart-button:hover {
        background-color: #e55d50;
      }
      .footer {
        justify-content: space-between;
      }
    `,
  ],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Cozy Blanket',
      description: 'Stay warm and comfy with this cozy blanket.',
      price: 29.99,
      image: 'assets/blanket.jpg',
    },
    {
      id: 2,
      name: 'Scented Candle',
      description: 'Fill your room with soothing scents.',
      price: 19.99,
      image: 'assets/candle.jpg',
    },
    {
      id: 3,
      name: 'Mug Set',
      description: 'Perfect for enjoying your favorite hot drink.',
      price: 24.99,
      image: 'assets/mug.jpg',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
