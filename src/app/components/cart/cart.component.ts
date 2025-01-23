import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatListModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems; // Update the cart items when the cart is updated
      console.log('Cart updated:', this.cartItems);
    });
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
  checkout() {
    this.cartService.clearCart();
  }
  toggle() {
    console.log('Toggled cart drawer');
  }
}
