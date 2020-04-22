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
    // var probForObj = {
    //   data: ["A Ashish Reddy", "A Nehra", "AD Mathews", "AD Russell", "AN Ahmed", "AR Patel", "Ankit Sharma", "Anureet Singh", "B Kumar", "BE Hendricks", "CH Morris", "D Wiese", "DJ Bravo", "DJ Hooda", "DJ Muthuswami", "DR Smith", "DS Kulkarni", "GB Hogg", "GJ Maxwell", "GS Sandhu", "Gurkeerat Singh", "HH Pandya", "HV Patel", "Harbhajan Singh", "IC Pandey", "Imran Tahir", "J Suchith", "J Theron", "JJ Bumrah", "JP Duminy", "JP Faulkner", "KV Sharma", "Karanveer Singh", "M Vijay", "M de Lange", "MA Starc", "MC Henriques", "MG Johnson", "MJ McClenaghan", "MM Sharma", "NM Coulter-Nile", "P Negi", "P Suyal", "PJ Cummins", "PV Tambe", "R Ashwin", "R Dhawan", "R Tewatia", "R Vinay Kumar", "RA Jadeja", "RG More", "RS Bopara", "S Aravind", "S Gopal", "SA Abbott", "SL Malinga", "STR Binny", "Sandeep Sharma", "Shivam Sharma", "TA Boult", "TG Southee", "UT Yadav", "VR Aaron", "YS Chahal"],
    //   value: [1.1333333333333333, 9.164133738601823, 1.8444444444444446, 3.0458715596330275, 2.15, 1.8732394366197183, 1.8387096774193548, 7.014705882352941, 1.2251461988304093, 4.3076923076923075, 1.9310344827586208, 7.5, 8.1875, 3.8529411764705883, 7.714285714285714, 11.333333333333334, 1.1693548387096775, 1.8974358974358974, 1.7321428571428572, 10.75, 4.714285714285714, 38.65079365079365, 2.8728813559322033, 5.06425702811245, 2.923076923076923, 2.581967213114754, 8.047619047619047, 1.0512820512820513, 1.0165745856353592, 1.1228070175438596, 2.013953488372093, 1.9425287356321839, 4.416666666666667, 4.666666666666667, 1.5789473684210527, 3, 1.0718954248366013, 1.7743589743589743, 11.707317073170731, 10.727969348659004, 3.377551020408163, 12.682242990654206, 5.388888888888889, 1.6349206349206349, 2.3839285714285716, 3.842239185750636, 1.2906976744186047, 1.4761904761904763, 7.638888888888889, 5.871559633027523, 10.5, 4.555555555555555, 1.0076335877862594, 1.2105263157894737, 11.4, 4.541202672605791, 1.5543478260869565, 1.6933962264150944, 2.3157894736842106, 4.0508474576271185, 2.217391304347826, 1.1415929203539823, 1.1920529801324504, 2.0492610837438425]
    // };

    // var dataPoints = [];
    // for (var j = 0; j < probForObj["data"].length; j++) {
    //   dataPoints.push({ label: probForObj["data"][j], y: Math.round(probForObj["value"][j]) });
    // }

    // var chart = new CanvasJS.Chart("chartContainer", {
    //   title: {
    //     text: "2015"
    //   },

    //   axisX: {
    //     labelAngle: 0
    //   },
    //   data: [{
    //     type: "column",
    //     dataPoints: dataPoints
    //   }]
    // });

    //////////////////////////

    let chart = new CanvasJS.Chart("chartContainer", {
      // animationEnabled: true,
      // exportEnabled: true,
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