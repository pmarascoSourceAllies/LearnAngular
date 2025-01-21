import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BUSINESS_NAME } from '../shared/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="accent" class="footer">
      <span>© 2025 {{ businessName }}. All rights reserved.</span>
    </mat-toolbar>
  `,
  styles: [
    `
      .footer {
        justify-content: center;
        text-align: center;
        position: sticky;
        bottom: 0;
      }
    `,
  ],
})
export class FooterComponent {
  businessName = BUSINESS_NAME;
}
