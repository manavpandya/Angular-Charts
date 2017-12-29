import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughunt-chart',
  templateUrl: './doughunt-chart.component.html',
  styleUrls: ['./doughunt-chart.component.css']
})
export class DoughuntChartComponent implements OnInit {

  id = 'AngularChart5';
  width = 600;
  height = 400;
  type = 'doughnut2d';
  dataFormat = 'json';
  dataSource;

  constructor() {

    this.dataSource = {

      "chart": {
        "caption": "India - Mobile Selling*",
        "subCaption": "* - Indicates that actual value may be vary",
        "numberPrefix": "Rs.",
        "startingAngle": "310",
        "decimals": "0",
        "defaultCenterLabel": "Total revenue: 2500 Cr.",
        "centerLabel": "Revenue from $label: $value",
        "theme": "fint"
      },
      "data": [{
        "label": "RedMi",
        "value": "800"
      }, {
        "label": "Apple",
        "value": "700"
      }, {
        "label": "Samsung",
        "value": "500"
      }, {
        "label": "Vivo",
        "value": "500"
      }]
    }

  }

  ngOnInit() {
  }

}
