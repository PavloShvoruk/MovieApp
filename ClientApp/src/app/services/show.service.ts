import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  baseUrl: string = "https://localhost:5001/";

  constructor(private http: HttpClient) {}

  getPopularShows(shows: any[], shortList: boolean) {
    this.http.get(`${this.baseUrl}api/Show/Popular`).subscribe(
      (response: any) => {
        if (shortList) {
          shows.push(...response.results.slice(0, 4));
        } else {
          shows.push(...response.results);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTopRatedShows(shows: any[], shortList: boolean) {
    this.http.get(`${this.baseUrl}api/Show/TopRated`).subscribe(
      (response: any) => {
        if (shortList) {
          shows.push(...response.results.slice(0, 4));
        } else {
          shows.push(...response.results);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
