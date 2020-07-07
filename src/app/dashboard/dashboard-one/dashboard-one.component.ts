import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-one",
  templateUrl: "./dashboard-one.component.html",
  styleUrls: ["./dashboard-one.component.scss"],
})
export class DashboardOneComponent implements OnInit {
  seriesListArray: any = [
    {
      name: "series1",
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
      name: "series2",
      images: [
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
      ],
      lectures: [
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 12,
        },
      ],
    },
    {
      name: "series3",
      images: [
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
        { img: "assets/images/faces/face1.jpg", name: "Faculty name" },
      ],
      lectures: [
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 13,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 13,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 13,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 13,
        },
        {
          heading: "Ind AS on Liabilities of the Financial Statment",
          lecturesNumber: 13,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
