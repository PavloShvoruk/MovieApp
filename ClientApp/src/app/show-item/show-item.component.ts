import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-show-item",
  templateUrl: "./show-item.component.html",
  styleUrls: ["./show-item.component.scss"]
})
export class ShowItemComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() poster: string;
  @Input() votes: any;

  constructor() {}

  ngOnInit() {}

  posterConcat() {
    if (this.poster) {
      return "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + this.poster;
    }
  }
}
