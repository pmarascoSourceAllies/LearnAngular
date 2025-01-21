import { EventEmitter, Injectable } from '@angular/core';
import { output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  cartUpdated = new EventEmitter<any[]>();

  addToCart(item: any) {
    this.cart.push(item);
    console.log('Item added to cart:', item);
    console.log('Cart:', this.cart);
    this.cartUpdated.emit(this.cart);
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.cartUpdated.emit(this.cart);
  }
}
