import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  id = 'AngularChart6';
  width = 600;
  height = 400;
  type = 'bubble';
  dataFormat = 'json';
  dataSource;

  constructor() { 
    this.dataSource ={
      
        "chart": {
            "theme": "fint",
            "caption": "Mobile Selling Analysis",
            "xAxisMinValue": "0",
            "xAxisMaxValue": "100",
            "yAxisMinValue": "0",
            "yAxisMaxValue": "30000",
            "plotFillAlpha": "70",
            "plotFillHoverColor": "#6baa01",
            "showPlotBorder": "0",
            "xAxisName": "Average Price",
            "yAxisName": "Units Sold",
            "numDivlines": "2",
            //Showing the labels on Bubbles
            "showValues": "1",
            "showTrendlineLabels": "0",
            "plotTooltext": "$name : Profit Contribution - $zvalue%"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "10K",
                        "x": "0"
                    }, 
                    {
                        "label": "20K",
                        "x": "20",
                        "showverticalline": "1"
                    }, 
                    {
                        "label": "30K",
                        "x": "40",
                        "showverticalline": "1"
                    }, 
                    {
                        "label": "40K",
                        "x": "60",
                        "showverticalline": "1"
                    }, 
                    {
                        "label": "50K",
                        "x": "80",
                        "showverticalline": "1"
                    }, 
                    {
                        "label": "60K+",
                        "x": "100",
                        "showverticalline": "1"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "color":"#00aee4",
                "data": [
                    {
                        "x": "20",
                        "y": "12000",
                        "z": "24",
                        "name": "RedMi"
                    }, 
                    {
                        "x": "60",
                        "y": "15000",
                        "z": "26",
                        "name": "Samsung"
                    }, 
                    {
                        "x": "80",
                        "y": "19000",
                        "z": "19",
                        "name": "Motorola"
                    },
                    {
                        "x": "45",
                        "y": "9000",
                        "z": "8",
                        "name": "Vivo"
                    },
                    {
                        "x": "33",
                        "y": "7500",
                        "z": "5",
                        "name": "Sony"
                    }, 
                    {
                        "x": "42",
                        "y": "12000",
                        "z": "10",
                        "name": "Oppo"
                    }, 
                    {
                        "x": "55",
                        "y": "43000",
                        "z": "9",
                        "name": "Apple"
                    }
                ]
            }
        ],
        "trendlines": [
            {
                "line": [
                    {
                        "startValue": "20000",
                        "endValue": "30000",
                        "isTrendZone": "1",
                        "color": "#aaaaaa",
                        "alpha": "14"
                    }, 
                    {
                        "startValue": "10000",
                        "endValue": "20000",
                        "isTrendZone": "1",
                        "color": "#aaaaaa",
                        "alpha": "7"
                    }
                ]
            }
        ]
    }
    
  }

  ngOnInit() {
  }

}
