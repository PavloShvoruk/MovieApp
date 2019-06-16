import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-show-list",
  templateUrl: "./show-list.component.html",
  styleUrls: ["./show-list.component.scss"]
})
export class ShowListComponent implements OnInit {
  title: string = "Popular Shows";
  shows: any = [];

  constructor() {}

  ngOnInit() {}
}
