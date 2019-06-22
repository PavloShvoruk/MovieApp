import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.scss"]
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  isLoggedIn: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.isLoggedIn);
  }

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
    this.router.navigateByUrl("login");
  }
}
