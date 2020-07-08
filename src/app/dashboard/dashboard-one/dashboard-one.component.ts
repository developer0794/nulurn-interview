import { Component, OnInit } from "@angular/core";
import { lectureData } from "../../../assets/mockUpdata/lectureDetails";

@Component({
  selector: "app-dashboard-one",
  templateUrl: "./dashboard-one.component.html",
  styleUrls: ["./dashboard-one.component.scss"],
})
export class DashboardOneComponent implements OnInit {
  setValue = null;
  seriesListArray: any = lectureData;

  constructor() {}

  ngOnInit() {}

  setCardActive(i) {
    this.setValue = i;
  }
}
