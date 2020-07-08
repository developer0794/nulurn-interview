import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-papre-one",
  templateUrl: "./papre-one.component.html",
  styleUrls: ["./papre-one.component.scss"],
})
export class PapreOneComponent implements OnInit {
  tabs = [1, 2.3];
  constructor() {}

  ngOnInit() {}
}
