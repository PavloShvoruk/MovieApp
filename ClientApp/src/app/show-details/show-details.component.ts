import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ShowService } from "../services/show.service";
import { ShowDetails } from "../models/show-details";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.scss"]
})
export class ShowDetailsComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() poster: string;
  @Input() votes: any;
  show: ShowDetails;

  constructor(private route: ActivatedRoute, private service: ShowService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.service.getShowDetails(params.get("id"))
        )
      )
      .subscribe((response: ShowDetails) => {
        this.show = response;
        console.log(this.show);
      });
  }
}
