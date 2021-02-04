import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

export interface graphDescription {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions;
}
