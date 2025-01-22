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
        <main class="main-content">
          <h1>Welcome to {{ businessName }}</h1>
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
