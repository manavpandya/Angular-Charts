import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  id = 'AngularChart1';
  width = 600;
  height = 400;
  type = 'bar2d';
  dataFormat = 'json';
  dataSource;

  constructor()
  {

  this.dataSource = {
    "chart": {
      "caption": "Unemployment Rate in a Country",
      "subcaption": "(Survey of 2015)",
      "yaxisname": "Unemployment Rate",
      "numbersuffix": "%",
      "showxaxisline": "0",
      "placevaluesinside": "0",
      "aligncaptionwithcanvas": "0",
      "divlinealpha": "0",
      "basefontsize": "12",
      "basefontcolor": "#194920",
      "valuefontcolor": "#194920",
      "canvasBgColor": "#f3f5f6",
      "canvasBgAlpha": "100",
      "bgColor": "#f3f5f6",
      "BgAlpha": "100",
      "palettecolors": "#3A803D",
      "showyaxisvalues": "0", //Hidden Y-axis value
      "plottooltext": "$label Rate of Unemployment : $datavalue",
      "theme": "zune"
  },
  "data": [
      {
          "label": "Country A",
          "value": "5.4"
      },
      {
          "label": "Country B",
          "value": "1.7"
      },
      {
          "label": "Country C",
          "value": "3.8"
      },
      {
          "label": "Country D",
          "value": "2.8"
      },
      {
          "label": "Country E",
          "value": "5.0"
      },
      {
          "label": "Country F",
          "value": "2.4"
      },
      {
          "label": "Country G",
          "value": "8.0"
      },
      {
          "label": "Country H",
          "value": "1.5"
      }
  ]
  }
}
  ngOnInit() {
  }

}
