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
        <mat-list-item lines="5" class="cart-item">
          <img
            matListAvatar
            [src]="item.product.image"
            alt="{{ item.product.name }}"
            class="product-image"
          />
          <div mat-line class="item-details">
            x{{ item.quantity }} {{ item.product.name }}
          </div>
          <div mat-line class="item-price">
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
  styles: [
    `
      .cart-content {
        padding: 16px;
        font-family: 'Merriweather', serif; // Apply a cozy font for better readability
        background-color: #fefaf0; // Light cozy background color
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
      }

      .cart-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #eaeaea;
        &:last-child {
          border-bottom: none;
        }
      }

      .product-image {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 6px; // Add rounded corners
        margin-right: 16px;
      }

      .item-details {
        flex: 1;
        font-size: 1.2rem; // Increase font size for readability
        margin-right: 16px;
        color: #5a3e36; // Warm, cozy color
      }

      .item-price {
        font-weight: bold;
        color: #8b4513; // Complementary to the design
        font-size: 1.2rem;
      }

      .checkout-button {
        width: 100%;
        margin-top: 16px;
        padding: 12px;
        font-size: 1.1rem;
        background-color: #ffcc80; // Warm, inviting color
        border-radius: 8px;
        color: #fff;
        border: none;
        transition: background-color 0.3s;
        &:hover {
          background-color: #ffa726;
        }
      }
    `,
  ],
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
