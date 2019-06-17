import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/material-module";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MainContentComponent } from "./main-content/main-content.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowItemComponent } from "./show-item/show-item.component";
import { ShowService } from "./services/show.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainContentComponent,
    ShowListComponent,
    ShowItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
