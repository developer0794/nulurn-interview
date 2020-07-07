import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-chapters",
  templateUrl: "./card-chapters.component.html",
  styleUrls: ["./card-chapters.component.scss"],
})
export class CardChaptersComponent implements OnInit {
  @Input("lectureData") lectureData;
  @Input("indexValue") indexValue;
  indexInc: string;

  constructor() {}

  ngOnInit() {
    if (this.indexValue + 1 >= 10) {
      this.indexInc = this.indexValue;
    } else {
      this.indexInc = "0" + this.indexValue;
    }
  }
}
