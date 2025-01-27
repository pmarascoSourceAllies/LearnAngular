// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { ShopComponent } from './components/shop/shop.component';
// import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'cart', component: CartComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
export class AppRoutingModule {}

// export const AppRoutingModule = RouterModule.forRoot(routes);
