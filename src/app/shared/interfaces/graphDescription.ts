import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export interface GraphDescription {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions;
  lineChartColors: Color[];
}
