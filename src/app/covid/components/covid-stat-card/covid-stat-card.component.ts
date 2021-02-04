import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-covid-stat-card',
  templateUrl: './covid-stat-card.component.html',
  styleUrls: ['./covid-stat-card.component.scss'],
})
export class CovidStatCardComponent {
  @Input() grandTotal: number;
  @Input() todaysTotal: number;
  @Input() color: 'primary' | 'danger' | 'success';
  @Input() label: string;
}
