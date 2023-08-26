import { Component } from '@angular/core';

@Component({
  selector: 'app-coursetopic',
  templateUrl: './coursetopic.component.html',
  styleUrls: ['./coursetopic.component.scss'],
})
export class CoursetopicComponent {
  chartOptions = {
    animationEnabled: true,
    data: [
      {
        type: 'doughnut',
        yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: 40, color: "#5D9645" },
          { y: 30, color: "#90D96F" },
          { y: 20, color: "#C5C5C5" },
          { y: 10, color: "#55624C" },
        ],
      },
    ],
  };


}
