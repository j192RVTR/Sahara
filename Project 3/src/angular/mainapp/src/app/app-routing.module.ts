import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product-list/product-list.component'
import { CartComponent } from './pages/cart/cart.component'
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product/:spec/:string', component: ProductListComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  {path: 'detail', component: ProductPageComponent},
  {path: 'detail/:id', component: ProductPageComponent},
  {path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
