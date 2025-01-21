import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatListModule, MatSidenav],
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
        @for (item of cartItems; track item.name) {
        <mat-list-item>
          <div mat-line>{{ item.name }}</div>
          <div mat-line>{{ item.price | currency }}</div>
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
      (click)="checkout()"
    >
      Checkout
    </button>
  `,
})
export class CartComponent implements OnInit {
  @ViewChild('cartDrawer') cartDrawer!: MatSidenav;
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
  checkout() {
    this.cartService.clearCart();
  }
  toggle() {
    this.cartDrawer.toggle();
    console.log('Toggled cart drawer');
  }
}
