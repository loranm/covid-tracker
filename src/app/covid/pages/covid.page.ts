import { Component } from '@angular/core';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage {
  title = 'Worldwide Stats';
  globalStat$ = this.service.globalStat$;
  constructor(private service: CovidService) {}
}
