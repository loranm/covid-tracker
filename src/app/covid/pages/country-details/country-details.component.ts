import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CountriesService } from '../../services/countries.service';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  title = 'country details';
  selectedCountry$ = combineLatest([
    this.covidService.countryStat$,
    this.countryService.selectedCountry$,
  ]).pipe(
    map(([stats, country]) => ({
      stats,
      country,
    }))
  );

  ngOnInit() {
    this.route.paramMap
      .pipe(
        take(1),
        map((params: ParamMap) => {
          const id = params.get('countryId');
          this.countryService.setSelectedCountry(+id);
        })
      )
      .subscribe();
  }

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesService,
    private covidService: CovidService
  ) {}
}
