import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IonCard, IonContent, IonItem } from '@ionic/angular';
import { Color } from 'ng2-charts';
import { GraphDescription } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {
  @Input() graph: GraphDescription;

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public lineChartColors: Color[] = [
    {
      borderColor: '#3880ff',
      backgroundColor: 'rgba(56, 128, 255,0.3)',
    },
    {
      borderColor: '#eb445a',
      backgroundColor: 'rgba(235, 68, 90,0.3)',
    },
    { borderColor: '#2dd36f', backgroundColor: 'rgba(45, 211, 111,0.3)' },
  ];

  constructor() {}
}
