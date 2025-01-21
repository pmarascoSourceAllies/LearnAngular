import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  template: `
    <h2>Cart</h2>
    <ul>
      <li *ngFor="let item of cartItems">
        {{ item.name }} - {{ item.price | currency }}
      </li>
    </ul>
  `,
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}
