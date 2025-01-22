import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatListModule],
  template: `
    <h3>Your Cart</h3>
    <div class="cart-content">
      @if (cartItems.length === 0){
      <div>
        <p>Your cart is empty. Start shopping!</p>
      </div>
      } @else {

      <h2>Cart</h2>
      <mat-list>
        @for (item of cartItems; track item.product.name) {
        <mat-list-item>
          <div mat-line>x{{ item.quantity }} {{ item.product.name }}</div>
          <div mat-line>
            {{ item.product.price * item.quantity | currency }}
          </div>
          <mat-divider></mat-divider>
        </mat-list-item>
        }
      </mat-list>
      }
    </div>

    <button
      mat-button
      color="primary"
      class="checkout-button"
      [disabled]="cartItems.length === 0"
      (click)="checkout()"
    >
      Checkout
    </button>
  `,
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
