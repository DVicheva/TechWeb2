import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentsResolver } from "students/students.resolver"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { StudentDetailsResolver } from "students/student-details/student-details.resolver"
import { MajorsComponent } from "majors/majors.component"
import { MajorsResolver } from "majors/majors.resolver"
import { MajorStudentsResolver } from "majors/major-students/major-students.resolver"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
import {ProductsComponent} from "./products/products.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AuthComponent} from "./auth/auth.component";
import {ProfilComponent} from "./profil/profil.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  //{ path: 'accessoires', component: AccessoiresComponent },
  //{ path: 'collections', component: CollectionsComponent },
  //{ path: 'goodies', component: GoodiesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'accueil', component: ProductsComponent },
  //{ path: 'panier', component: PanierComponent },
  { path: 'connexion', component: AuthComponent },
  { path: '', redirectTo: '/produits', pathMatch: 'full' }, // Redirection par défaut
  { path: 'products/id/:id', component: ProductDetailComponent },
  { path: "", component: ProductsComponent },
  { path: "users", component: ProfilComponent, canActivate: [AuthGuard] },
  {
    path: "etudiants",
    component: StudentsComponent,
    resolve: {
      students: StudentsResolver,
    },
  },
  { path: 'products', component: ProductsComponent },
  {
    path: "details-etudiant/:id",
    component: StudentDetailsComponent,
    resolve: {
      student: StudentDetailsResolver,
    },
  },
  {
    path: "filieres",
    component: MajorsComponent,
    resolve: {
      majors: MajorsResolver,
    },
  },
  {
    path: "etudiants-filiere/:id",
    component: MajorStudentsComponent,
    resolve: {
      studentsFromMajor: MajorStudentsResolver,
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
