import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatSidenavModule, MatMenuModule } from '@angular/material';
import { AppComponent } from './app.component';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { SplineChartComponent } from './spline-chart/spline-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughuntChartComponent } from './doughunt-chart/doughunt-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './routes';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    ColumnChartComponent,
    SplineChartComponent,
    LineChartComponent,
    DoughuntChartComponent,
    BubbleChartComponent,
    BarChartComponent

  ],
  imports: [
    routing,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    FusionChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
