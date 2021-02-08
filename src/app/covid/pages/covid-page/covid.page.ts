import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { loadCountries, selectSelectedCountry } from 'src/app/shared/state';
import { CovidService } from '../../services/stats.service';
import { loadCovids, selectStats } from '../../state';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage {
  title = 'Worldwide Stats';

  covidInfo$ = this.store.select(selectStats);

  graph$ = this.store
    .select(selectSelectedCountry)
    .pipe(
      switchMap((country) => this.covidService.getHistoricalStats(country))
    );

  onSearchClicked() {
    this.router.navigate(['search']);
  }

  constructor(
    private router: Router,
    private store: Store,
    private covidService: CovidService
  ) {
    this.store.dispatch(loadCovids());
    this.store.dispatch(loadCountries());
  }
}
