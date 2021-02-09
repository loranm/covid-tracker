import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-holder',
  templateUrl: './date-holder.component.html',
  styleUrls: ['./date-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateHolderComponent {
  @Input() updated: moment.Moment;
}
