import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountriesService } from '../../services/countries.service';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage {
  title = 'Worldwide Stats';
  globalStat$ = this.covidService.globalStat$;
  countries$ = this.countriesService.countriesList$;
  selectedCountry$ = this.countriesService.selectedCountry$;

  vm$ = combineLatest([this.globalStat$, this.countries$]).pipe(
    map(([stats, countries]) => ({
      stats,
      countries,
    }))
  );

  goTo(countryId: number): void {
    this.router.navigate([`country/${countryId}`], {
      relativeTo: this.route,
    });
  }

  constructor(
    private covidService: CovidService,
    private countriesService: CountriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
