import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BUSINESS_NAME } from '../../shared/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  businessName = BUSINESS_NAME;
}
