import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { BUSINESS_NAME } from '../../shared/constants';
import { CartComponent } from '../cart/cart.component';
import { BannerComponent } from '../banner/banner.component';

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
  templateUrl: './app.component.html',
  styleUrls: ['././app.component.scss'],
})
export class AppComponent {
  businessName = BUSINESS_NAME;
}
