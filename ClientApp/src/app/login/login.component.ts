import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(
    private service: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  onSubmit(loginForm: NgForm) {
    this.service.login(loginForm.value).subscribe(
      (response: any) => {
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl("");
      },
      err => {
        if (err.status == 400) {
          loginForm.reset();
          this.snackBar.open("Incorrect username or password.", "", {
            duration: 1000
          });
        } else {
          console.log(err);
        }
      }
    );
  }

  validateUsername() {
    return this.username.hasError("required")
      ? "You must enter a username"
      : "";
  }

  validatePassword() {
    return this.password.hasError("required")
      ? "You must enter a password"
      : "";
  }
}
