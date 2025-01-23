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
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
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
