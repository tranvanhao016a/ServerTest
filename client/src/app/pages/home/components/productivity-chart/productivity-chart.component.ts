import { Component } from '@angular/core';

@Component({
  selector: 'app-productivity-chart',
  templateUrl: './productivity-chart.component.html',
  styleUrls: ['./productivity-chart.component.scss']
})
export class ProductivityChartComponent {
  chart: any;
	
  chartOptions = {
    
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: "K"
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,###K",
      dataPoints: [
        {  y: 15 },
        {  y: 20 },
        {  y: 24 },
        {  y: 29 }
      ]
    }]
  }	
}
