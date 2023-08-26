import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursetopicComponent } from './components/coursetopic/coursetopic.component';
import { ProductivityChartComponent } from './components/productivity-chart/productivity-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';



@NgModule({
  declarations: [
    HomeComponent,
    CoursetopicComponent,
    ProductivityChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CanvasJSAngularChartsModule
  ]
})
export class HomeModule { }
