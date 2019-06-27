import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl: string = "https://localhost:5001/";
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(formData): Observable<any> {
    return this.http
      .post(this.baseUrl + "api/ApplicationUser/login", formData)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem("token", user.token);
          }
        })
      );
  }

  register(formData) {
    return this.http.post(
      this.baseUrl + "api/ApplicationUser/register",
      formData
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
