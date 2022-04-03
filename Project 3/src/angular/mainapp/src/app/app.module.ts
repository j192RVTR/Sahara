import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product-list/product-list.component'
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FeatureListComponent,
    WelcomeComponent,
    ProductListComponent,
    IndexComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    OrderListComponent,
    ProductPageComponent,
    RegisterComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
