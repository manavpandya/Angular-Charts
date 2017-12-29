import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { DoughuntChartComponent } from './doughunt-chart/doughunt-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SplineChartComponent } from './spline-chart/spline-chart.component';

const appRoutes: Routes = [
    { path: '', redirectTo:'Bar',pathMatch:'full' },
    { path: 'Bar', component: BarChartComponent },
    { path: 'Pie', component: PieChartComponent },
    { path: 'Column', component: ColumnChartComponent },
    { path: 'Line', component: LineChartComponent },
    { path: 'Doughunt', component: DoughuntChartComponent },
    { path: 'Bubble', component: BubbleChartComponent },
    { path: 'Mixed', component: SplineChartComponent }    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);