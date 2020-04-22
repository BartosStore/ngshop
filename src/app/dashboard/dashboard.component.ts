import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'canvasjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      // animationEnabled: true, ERROR
      // exportEnabled: true, ERROR
      title: {
        text: "Load of batch data [GB]"
      },
      axisX: {
        labelAngle: 0
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Monday" },
          { y: 55, label: "Tuesday" },
          { y: 50, label: "Wednesday" },
          { y: 65, label: "Thursday" },
          { y: 95, label: "Friday" },
          { y: 68, label: "Saturday" },
          { y: 68, label: "Sunday" },
        ]
      }]
    });

    chart.render();
  }
}


class AppComponent implements OnInit {
  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      // animationEnabled: true,
      // exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      axisX: {
        labelAngle: 0
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
    chart.render();
  }
}