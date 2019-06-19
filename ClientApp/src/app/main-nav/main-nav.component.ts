import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.scss"]
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  placeHolder: string = "Search TV Show...";
  boolData: boolean = false;

  checkPlaceholder() {
    if (this.placeHolder) {
      this.placeHolder = null;
      return;
    } else {
      this.placeHolder = "Search TV Show...";
      return;
    }
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("");
  }
}
