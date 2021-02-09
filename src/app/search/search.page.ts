import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCountries, selectCountry } from '../shared/state';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  filterText: string;
  countriesList$ = this.store.select(selectCountries);

  onCountrySelected(countryId: number): void {
    this.store.dispatch(selectCountry({ id: countryId }));
    this.router.navigate(['world-stats']);
  }

  constructor(private store: Store, private router: Router) {}
}
