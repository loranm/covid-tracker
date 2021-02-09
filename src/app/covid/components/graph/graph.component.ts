import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GraphDescription } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent {
  @Input() graph: GraphDescription;
}
