import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShowService } from "../services/show.service";

@Component({
  selector: "app-show-list",
  templateUrl: "./show-list.component.html",
  styleUrls: ["./show-list.component.scss"]
})
export class ShowListComponent implements OnInit {
  title: string = "Popular Shows";
  showsPopular: any = [];
  showsTopRated: any = [];

  constructor(private showService: ShowService) {}

  async ngOnInit() {
    await this.showService.getPopularShows(this.showsPopular, true);
    console.log(this.showsPopular);
    await this.showService.getTopRatedShows(this.showsTopRated, true);
    console.log(this.showsTopRated);
  }
}
