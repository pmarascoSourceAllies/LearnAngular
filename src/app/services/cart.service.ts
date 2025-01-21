import { EventEmitter, Injectable } from '@angular/core';
import { output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  private cartSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartSource.asObservable();

  constructor() {}

  private emitCartItems() {
    console.log('Cart:', this.cart);
    this.cartSource.next(this.cart);
  }

  addToCart(item: any) {
    this.cart.push(item);
    console.log('Item added to cart:', item);
    this.emitCartItems();
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.emitCartItems();
  }
}
