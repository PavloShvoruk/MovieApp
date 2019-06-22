import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl: string = "https://localhost:5001/";

  constructor(private http: HttpClient) {}

  login(formData) {
    return this.http.post(this.baseUrl + "api/ApplicationUser/login", formData);
  }

  register(formData) {
    return this.http.post(
      this.baseUrl + "api/ApplicationUser/register",
      formData
    );
  }

  isLoggedIn() {
    if (localStorage.getItem("token") != null) {
      return true;
    } else {
      return false;
    }
  }
}
