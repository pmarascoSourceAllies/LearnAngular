import {
  Component,
  OnInit,
  Signal,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatListModule],
  templateUrl: './cart.component.html',
  styleUrls: ['././cart.component.scss'],
})
export class CartComponent {
  cartItems: Signal<{ product: Product; quantity: number }[]>;

  // Computed signal for the total cost
  totalCost: Signal<number>;

  constructor(private cartService: CartService) {
    // Signal for cart items directly from the service
    this.cartItems = this.cartService.cartItems;
    this.totalCost = computed(() =>
      this.cartItems().reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      )
    );
  }

  // Method to clear the cart
  checkout(): void {
    this.cartService.clearCart();
  }
}
