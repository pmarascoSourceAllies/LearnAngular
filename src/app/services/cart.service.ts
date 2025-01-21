import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  addToCart(item: any) {
    this.cart.push(item);
    console.log('Item added to cart:', item);
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
