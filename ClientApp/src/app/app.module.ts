import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "src/material-module";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowItemComponent } from "./show-item/show-item.component";
import { ShowService } from "./services/show.service";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FavoritiesComponent } from "./favorities/favorities.component";
import { AuthGuard } from "./auth/auth.guard";
import { ShowDetailsComponent } from './show-details/show-details.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainContentComponent,
    ShowListComponent,
    ShowItemComponent,
    LoginComponent,
    RegisterComponent,
    FavoritiesComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5001"],
        blacklistedRoutes: ["localhost:5001/api/ApplicationUser"]
      }
    })
  ],
  providers: [ShowService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
