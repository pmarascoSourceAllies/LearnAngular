import { Component } from '@angular/core';
import { BUSINESS_NAME } from '../shared/constants';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <div class="banner">
      <img [src]="bannerImage" alt="Welcome Banner" class="banner-image" />
    </div>
  `,
  styles: [
    `
      .banner {
        background-color: #ffcc00;
        color: #333;
        text-align: center;
        padding: 16px;
        font-weight: bold;
      }
      .banner-image {
        width: 100%; /* Makes the image fit the screen width */
        max-width: 100%; /* Ensures it doesn't exceed the container width */
        height: auto; /* Maintains the aspect ratio */
        margin-bottom: 16px;
      }
    `,
  ],
})
export class BannerComponent {
  businessName = BUSINESS_NAME;
  bannerImage = 'assets/InAGoldenAfternoon.jpg';
}
