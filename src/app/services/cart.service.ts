import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Define a signal for the cart state with an initial value of an empty array
  private cartSignal = signal<{ product: Product; quantity: number }[]>([]);

  // Expose the signal for reading
  cartItems = this.cartSignal;

  constructor() {}

  // Add a product to the cart
  addToCart(item: Product): void {
    const currentCart = this.cartSignal();
    const existingItem = currentCart.find(
      (cartItem) => cartItem.product.id === item.id
    );

    if (existingItem) {
      // Increment the quantity of the existing item
      existingItem.quantity++;
    } else {
      // Add a new item to the cart
      currentCart.push({ product: item, quantity: 1 });
    }

    // Update the signal with the new cart state
    this.cartSignal.set([...currentCart]);
    console.log('Item added to cart:', item);
  }

  // Get the current cart items (read directly from the signal)
  getCartItems(): { product: Product; quantity: number }[] {
    return this.cartSignal();
  }

  // Clear the cart
  clearCart(): void {
    this.cartSignal.set([]); // Reset the signal to an empty array
    console.log('Cart cleared');
  }
}
