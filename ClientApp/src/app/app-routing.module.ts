import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainContentComponent } from "./main-content/main-content.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FavoritiesComponent } from "./favorities/favorities.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", component: MainContentComponent },
  {
    path: "popular",
    component: MainContentComponent,
    data: { category: "popular" }
  },
  {
    path: "top",
    component: MainContentComponent,
    data: { category: "topRated" }
  },
  {
    path: "latest",
    component: MainContentComponent,
    data: { category: "latest" }
  },
  {
    path: "favorities", //localhost:5001/favorities
    component: FavoritiesComponent,
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: []
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
