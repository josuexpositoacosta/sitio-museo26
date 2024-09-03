import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels')  doughnutChartLabels: string[] = [];
  @Input('ChartData')  doughnutChartData: //number[] = [];
    ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      /* { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] } */
    ]
  }; 

  @Input('ChartType')  doughnutChartType: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
