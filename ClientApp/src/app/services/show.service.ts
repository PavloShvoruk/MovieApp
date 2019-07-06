import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShowDetails } from "../models/show-details";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  baseUrl = environment.apiUrl;
  showQnty: number = 4;

  constructor(private http: HttpClient) {}

  getPopularShows(shows: any[], shortList: boolean) {
    this.http.get(`${this.baseUrl}api/Show/Popular`).subscribe(
      (response: any) => {
        if (shortList) {
          shows.push(...response.results.slice(0, this.showQnty));
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
          shows.push(...response.results.slice(0, this.showQnty));
        } else {
          shows.push(...response.results);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getLatestShows(shows: any[], shortList: boolean) {
    this.http.get(`${this.baseUrl}api/Show/Latest`).subscribe(
      (response: any) => {
        if (shortList) {
          shows.push(...response.results.slice(0, this.showQnty));
        } else {
          shows.push(...response.results);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getShowDetails(id: string): Observable<ShowDetails> {
    return this.http.get<ShowDetails>(`${this.baseUrl}api/Show/Details/${id}`);
  }
}
