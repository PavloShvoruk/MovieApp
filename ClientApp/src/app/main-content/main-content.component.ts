import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Data } from "@angular/router";

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
  categoryQuery = this.route.snapshot.data["category"];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
