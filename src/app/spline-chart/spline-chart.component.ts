import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.css']
})
export class SplineChartComponent implements OnInit {

  id = 'AngularChart7';
  width = 600;
  height = 400;
  type = 'mscombi2d';
  dataFormat = 'json';
  dataSource;

  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Actual Revenues, Targeted Revenues & Profits By Months",
        "subcaption": "Last year",
        "xaxisname": "Month",
        "yaxisname": "Amount in INR",
        "numberprefix": "Rs.",
        "theme": "ocean"
      },
      "categories": [
        {
          "category": [
            {
              "label": "Jan"
            },
            {
              "label": "Feb"
            },
            {
              "label": "Mar"
            },
            {
              "label": "Apr"
            },
            {
              "label": "May"
            },
            {
              "label": "Jun"
            },
            {
              "label": "Jul"
            },
            {
              "label": "Aug"
            },
            {
              "label": "Sep"
            },
            {
              "label": "Oct"
            },
            {
              "label": "Nov"
            },
            {
              "label": "Dec"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Trail Revenue",
          "data": [
            {
              "value": "2500"
            },
            {
              "value": "2250"
            },
            {
              "value": "2100"
            },
            {
              "value": "1900"
            },
            {
              "value": "1785"
            },
            {
              "value": "1600"
            },
            {
              "value": "1500"
            },
            {
              "value": "1470"
            },
            {
              "value": "1300"
            },
            {
              "value": "1190"
            },
            {
              "value": "1005"
            },
            {
              "value": "850"
            }
          ]
        },
        {
          "seriesname": "Assumed Revenue",
          "renderas": "line",
          "showvalues": "0",
          "data": [
            {
              "value": "2200"
            },
            {
              "value": "2050"
            },
            {
              "value": "2200"
            },
            {
              "value": "1800"
            },
            {
              "value": "1700"
            },
            {
              "value": "1500"
            },
            {
              "value": "1480"
            },
            {
              "value": "1470"
            },
            {
              "value": "1200"
            },
            {
              "value": "2100"
            },
            {
              "value": "1100"
            },
            {
              "value": "950"
            }
          ]
        },
        {
          "seriesname": "Profit",
          "renderas": "area",
          "showvalues": "0",
          "data": [
            {
              "value": "4000"
            },
            {
              "value": "5000"
            },
            {
              "value": "3000"
            },
            {
              "value": "4000"
            },
            {
              "value": "1000"
            },
            {
              "value": "7000"
            },
            {
              "value": "1000"
            },
            {
              "value": "4000"
            },
            {
              "value": "1000"
            },
            {
              "value": "8000"
            },
            {
              "value": "2000"
            },
            {
              "value": "7000"
            }
          ]
        }
      ]
    }
  }

  ngOnInit() {
  }

}
