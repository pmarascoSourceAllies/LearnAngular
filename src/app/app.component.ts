import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { ProductListComponent } from './components/products/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { BUSINESS_NAME } from './shared/constants';
import { CartComponent } from './components/cart.component';
import { BannerComponent } from './components/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    MatButtonModule,
    CartComponent,
    BannerComponent,
  ],
  providers: [CartService],
  template: `
    <mat-sidenav-container class="app-container">
      <mat-sidenav #cartDrawer mode="side" position="end" opened="false">
        <app-cart></app-cart>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-header [cartDrawer]="cartDrawer"></app-header>
        <app-banner></app-banner>

        <div class="section-divider">
          <span>Welcome to {{ businessName }}</span>
          <span>Explore Our Products</span>
        </div>

        <main class="main-content">
          <h2>Items</h2>
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

      .section-divider {
        text-align: center;
        margin: 32px 0;
        position: relative;

        span {
          background-color: #fff8e1; /* Match page background */
          color: #5c4033;
          font-weight: bold;
          padding: 0 12px;
          font-size: 1.2rem;
          position: relative;
          z-index: 1;
        }

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #e0e0e0;
          z-index: 0;
        }
      }
    `,
  ],
})
export class AppComponent {
  businessName = BUSINESS_NAME;
}
