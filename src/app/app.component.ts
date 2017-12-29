import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular : Using Charts';
  ngOnInit() {}
  constructor() {
  }
}
