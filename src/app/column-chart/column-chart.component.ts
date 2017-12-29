import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  id = 'AngularChart3';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Electronics Selling",
        "subCaption": "Top 5 stores in last month by revenue",
        "numberprefix": "Rs.(Crore) ",
        "theme": "fint"
      },
      "data": [{
        "label": "Redmi",
        "value": "95"
      },
      {
        "label": "IPhone",
        "value": "90"
      },
      {
        "label": "Motorola",
        "value": "76"
      },
      {
        "label": "Samsung",
        "value": "67"
      },
      {
        "label": "vivo",
        "value": "55"
      }
      ]
    }
   }

  ngOnInit() {
  }

}
