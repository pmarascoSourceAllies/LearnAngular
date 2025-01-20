import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/products/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { BUSINESS_NAME } from './shared/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSidenavModule, HeaderComponent, FooterComponent, ProductListComponent, MatButtonModule],
  template: `
    <mat-sidenav-container class="app-container">
      <mat-sidenav #cartDrawer mode="side" position="end" opened="false">
        <h3>Your Cart</h3>
        <div class="cart-content">
          <p>Your cart is empty. Start shopping!</p>
          <!-- Cart items can be dynamically listed here -->
        </div>
        <button mat-button color="primary" class="checkout-button">Checkout</button>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header [cartDrawer]="cartDrawer"></app-header>
        <main class="main-content">
          <h1>Welcome to {{businessName}}</h1>
          <product-list></product-list>
        </main>
        <app-footer></app-footer>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .app-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .main-content {
        padding: 16px;
        background: #fefae0;
        flex-grow: 1;
      }
      .cart-content {
        padding: 16px;
      }
      .checkout-button {
        width: 100%;
        margin-top: 16px;
      }
    `,
  ],
})
export class AppComponent {
  businessName = BUSINESS_NAME;
}
