import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormControl("", [Validators.email]),
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(2)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ])
  });
  constructor(
    private service: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  get username() {
    return this.registerForm.get("username");
  }

  get password() {
    return this.registerForm.get("password");
  }

  onSubmit(registerForm: NgForm) {
    this.service.register(registerForm.value).subscribe(
      (response: any) => {
        if (response.succeeded) {
          // this.registerForm.reset();
          this.snackBar.open("New user created", "", {
            duration: 1000
          });
          this.router.navigateByUrl("login");
        } else {
          response.errors.forEach(element => {
            switch (element.code) {
              case "DuplicateUserName":
                //Username is already taken
                this.snackBar.open("Username is already taken", "", {
                  duration: 1000
                });
                break;

              default:
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
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
