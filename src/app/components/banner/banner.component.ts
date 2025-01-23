import { Component } from '@angular/core';
import { BUSINESS_NAME } from '../../shared/constants';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['././banner.component.scss'], // Reference the external stylesheet
})
export class BannerComponent {
  businessName = BUSINESS_NAME;
  bannerImage = 'assets/InAGoldenAfternoon.jpg';
}
