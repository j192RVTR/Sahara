import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FeatureListComponent,
    WelcomeComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
