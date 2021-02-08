import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { CovidService } from '../../services/stats.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage {
  title = 'Worldwide Stats';
  globalStat$ = this.covidService.globalStat$;
  countries$ = this.countriesService.countriesList$;
  historicalStats$ = this.covidService.historicalStats$;
  selectedCountry$ = this.countriesService.selectedCountry$;

  vm$ = combineLatest([
    this.globalStat$,
    this.historicalStats$,
    this.countries$,
  ]).pipe(
    map(([stats, historicalStats, countries]) => ({
      stats,
      historicalStats,
      countries,
    }))
  );

  goTo(countryId: number): void {
    this.router.navigate([`country/${countryId}`], {
      relativeTo: this.route,
    });
  }

  onSearchFocus(evt) {
    this.router.navigate(['search']);
  }

  constructor(
    private covidService: CovidService,
    private countriesService: CountriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
