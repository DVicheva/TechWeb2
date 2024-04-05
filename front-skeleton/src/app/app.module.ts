import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MajorsComponent } from "majors/majors.component"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
import { HttpClientModule } from "@angular/common/http"
import {ProductsComponent} from "./products/products.component";
import {NgOptimizedImage} from "@angular/common";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AuthComponent} from "./auth/auth.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ProfilComponent} from "./profil/profil.component";

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HomeComponent,
    StudentsComponent,
    StudentDetailsComponent,
    MajorsComponent,
    MajorStudentsComponent,
    ProductsComponent,
    ProductDetailComponent,
    ContactsComponent,
    AuthComponent,
    ProfilComponent
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
