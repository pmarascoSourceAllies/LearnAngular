import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor, CommonModule],
  template: `
    <div class="product-grid">
      <mat-card *ngFor="let product of products" class="product-card">
        <img mat-card-image [src]="product.image" [alt]="product.name" />
        <mat-card-title>{{ product.name }}</mat-card-title>
        <mat-card-content>
          <p>{{ product.description }}</p>
          <p><strong>{{ product.price | currency }}</strong></p>
        </mat-card-content>
        <button mat-button color="primary">Add to Cart</button>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 16px;
      }
      .product-card {
        max-width: 100%;
      }
    `,
  ],
})
export class ProductListComponent {
  products = [
    {
      name: 'Cozy Blanket',
      description: 'Stay warm and comfy with this cozy blanket.',
      price: 29.99,
      image: 'assets/blanket.jpg',
    },
    {
      name: 'Scented Candle',
      description: 'Fill your room with soothing scents.',
      price: 19.99,
      image: 'assets/candle.jpg',
    },
    {
      name: 'Mug Set',
      description: 'Perfect for enjoying your favorite hot drink.',
      price: 24.99,
      image: 'assets/mug.jpg',
    },
  ];
}
