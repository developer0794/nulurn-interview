import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-one",
  templateUrl: "./dashboard-one.component.html",
  styleUrls: ["./dashboard-one.component.scss"],
})
export class DashboardOneComponent implements OnInit {
  setValue = null;
  seriesListArray: any = [
    {
      name: "Series 1",
      images: [
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
      ],
      lectures: [
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 10,
        },
      ],
    },
    {
      name: "Series 2",
      images: [
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
      ],
      lectures: [
        {
          heading: "Ind changed values Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind changed values Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind changed values Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind changed values Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind changed values Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  setCardActive(i) {
    this.setValue = i;
  }
}
