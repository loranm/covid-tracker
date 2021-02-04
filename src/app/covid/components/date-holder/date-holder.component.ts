import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-holder',
  templateUrl: './date-holder.component.html',
  styleUrls: ['./date-holder.component.scss'],
})
export class DateHolderComponent implements OnInit {
  @Input() updated: number;

  constructor() {}

  ngOnInit() {}
}
