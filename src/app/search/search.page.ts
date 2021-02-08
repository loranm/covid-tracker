import { Component } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  filterText: string;
  countriesList$ = this.countriesService.countriesList$;

  onCountrySelected(countryId: number): void {
    console.log(countryId);
  }

  constructor(private countriesService: CountriesService) {}
}
