import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"]
})
export class MainContentComponent implements OnInit {
  categories: any[] = [
    {
      title: "Popular Shows",
      query: "popular"
    },
    {
      title: "Top Rated Shows",
      query: "topRated"
    },
    {
      title: "Latest Shows",
      query: "latest"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
