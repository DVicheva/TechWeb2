import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import {ProductsComponent} from "./products/products.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AuthComponent} from "./auth/auth.component";
import {ProfilComponent} from "./profil/profil.component";
import {AuthGuard} from "./services/auth.guard";
import {CartComponent} from "./cart/cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {ForumComponent} from "./forum/forum.component";

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // Redirection par defaut
  { path: 'contacts', component: ContactsComponent },
  { path: 'accueil', component: ProductsComponent },
  { path: "users", component: AuthComponent },
  { path: 'products/id/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: "", component: ProductsComponent },
  { path: 'users/:id', component: ProfilComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'forum', component:ForumComponent, canActivate: [AuthGuard] },
  { path: 'products' , component:ProductsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
