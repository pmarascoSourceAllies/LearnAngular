import { EventEmitter, Injectable } from '@angular/core';
import { output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];
  private cartSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartSource.asObservable();

  constructor() {}

  private emitCartItems() {
    console.log('Cart:', this.cart);
    this.cartSource.next(this.cart);
  }

  addToCart(item: Product) {
    const existingItem = this.cart.find(
      (cartItem) => cartItem.product.id === item.id
    );
    if (existingItem) {
      existingItem.quantity++; // Increment quantity
    } else {
      this.cart.push({ product: item, quantity: 1 }); // Add new item
    }
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
