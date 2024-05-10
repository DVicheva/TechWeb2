import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatListModule } from "@angular/material/list"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { HttpClientModule } from "@angular/common/http"
import {ProductsComponent} from "./products/products.component";
import {NgOptimizedImage} from "@angular/common";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AuthComponent} from "./auth/auth.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ProfilComponent} from "./profil/profil.component";
import {CartComponent} from "./cart/cart.component";
import {AuthService} from "./services/auth.service";
import {CartService} from "./services/cart.service";
import {ProductsService} from "./services/products.service";
import {OrdersComponent} from "./orders/orders.component";
import {OrdersService} from "./services/orders.service";
import {ForumComponent} from "./forum/forum.component";
import {ForumService} from "./services/forum.service";

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ContactsComponent,
    AuthComponent,
    ProfilComponent,
    CartComponent,
    OrdersComponent,
    ForumComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatListModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        NgOptimizedImage,
    ],
  providers: [CartService, AuthService, ProductsService, OrdersService, ForumService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
