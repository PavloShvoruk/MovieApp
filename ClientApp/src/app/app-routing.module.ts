import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainContentComponent } from "./main-content/main-content.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FavoritiesComponent } from "./favorities/favorities.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", component: MainContentComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "favorities",
    component: FavoritiesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
