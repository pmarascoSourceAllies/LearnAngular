import { Component, Input, computed } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { BUSINESS_NAME } from '../../shared/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['././header.component.scss'],
  animations: [
    trigger('cartButtonAnimation', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'enlarged',
        style({
          transform: 'scale(1.2)',
        })
      ),
      transition('normal <=> enlarged', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent {
  businessName = BUSINESS_NAME;
  @Input() cartDrawer!: any;

  // Signal for cart button animation state
  cartButtonState = 'normal';

  // Computed signal for cart item count
  cartItemCount = computed(() => this.cartService.cartItems().length);

  constructor(private router: Router, private cartService: CartService) {}

  // Method to animate the cart button
  animateCartButton() {
    this.cartButtonState = 'enlarged';
    setTimeout(() => {
      this.cartButtonState = 'normal';
    }, 300);
  }

  // Method to navigate to the cart
  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }
}
