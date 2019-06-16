import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  baseUrl: string = "https://localhost:5001/";
  shows: any = [];

  constructor(private http: HttpClient) {}

  getPopularShows() {
    this.http.get(`${this.baseUrl}api/Show/Popular`).subscribe(
      (response: any) => {
        this.shows.push(...response.results);
      },
      error => {
        console.log(error);
      }
    );
  }
}
