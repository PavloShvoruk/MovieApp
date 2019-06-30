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
  @Input() shortList: boolean;

  shows: any = [];

  constructor(private showService: ShowService) {}

  ngOnInit() {
    if (this.category == "popular") {
      this.showService.getPopularShows(this.shows, this.shortList);
    } else if (this.category == "topRated") {
      this.showService.getTopRatedShows(this.shows, this.shortList);
    } else if (this.category == "latest") {
      this.showService.getLatestShows(this.shows, this.shortList);
    }
  }
}
