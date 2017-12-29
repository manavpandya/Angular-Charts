import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

   id = 'AngularChart4';
  width = 600;
  height = 400;
  type = 'line';
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
