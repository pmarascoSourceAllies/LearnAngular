import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BUSINESS_NAME } from '../../shared/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary" class="header-toolbar">
      <span class="brand">{{ businessName }}</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/">Home</button>
      <button mat-button routerLink="/shop">Shop</button>
      <button mat-button (click)="cartDrawer.toggle()">Cart</button>
    </mat-toolbar>
  `,
  styles: [
    `
      .header-toolbar {
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        background-color: #ffffff; /* Make sure the header has a white background */
      }
      .spacer {
        flex: 1 1 auto;
      }
      .brand {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333333; /* Darker color for text contrast */
      }
    `,
  ],
})
export class HeaderComponent {
  businessName = BUSINESS_NAME;
  @Input() cartDrawer!: any;
}
