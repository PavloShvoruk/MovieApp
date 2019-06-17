import { Component, OnInit } from "@angular/core";
import { ShowService } from "../services/show.service";
import { Input } from "@angular/core";

@Component({
  selector: "app-show-list",
  templateUrl: "./show-list.component.html",
  styleUrls: ["./show-list.component.scss"]
})
export class ShowListComponent implements OnInit {
  @Input() category: string;
  @Input() title: string;

  shows: any = [];

  constructor(private showService: ShowService) {}

  async ngOnInit() {
    console.log(this.category);
    if (this.category == "popular") {
      await this.showService.getPopularShows(this.shows, true);
    } else if (this.category == "topRated") {
      await this.showService.getTopRatedShows(this.shows, true);
    } else if (this.category == "latest") {
      await this.showService.getLatestShows(this.shows, true);
    }
  }
}
