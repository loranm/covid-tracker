import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-stat-card',
  templateUrl: './covid-stat-card.component.html',
  styleUrls: ['./covid-stat-card.component.scss'],
})
export class CovidStatCardComponent implements OnInit {
  @Input() grandTotal: number;
  @Input() todaysTotal: number;
  @Input() color: 'primary' | 'danger' | 'success';
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
