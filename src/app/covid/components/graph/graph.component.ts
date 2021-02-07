import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { graphDescription } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnChanges {
  @Input() graphDescription!: graphDescription;

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = null;

  ngOnChanges(changes: SimpleChanges): void {
    const {
      lineChartData,
      lineChartLabels,
      lineChartOptions,
    } = changes?.graphDescription?.currentValue;

    this.lineChartData = lineChartData;
    this.lineChartLabels = lineChartLabels;
    this.lineChartOptions = lineChartOptions;
  }

  constructor() {}
}
