import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BUSINESS_NAME } from '../../shared/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['././header.component.scss'],
})
export class HeaderComponent {
  businessName = BUSINESS_NAME;
  @Input() cartDrawer!: any;
}
