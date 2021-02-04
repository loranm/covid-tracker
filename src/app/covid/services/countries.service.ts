import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateCountriesDTO } from 'src/app/shared/dto/createCountriesDTO';
import { Country } from 'src/app/shared/interfaces/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public readonly countriesEndpoint = 'countries';

  private selectedCountrySubject = new BehaviorSubject<number>(null);
  selectedCountryAction$ = this.selectedCountrySubject.asObservable();

  private parseCountries(countries: CreateCountriesDTO[]): Country[] {
    return countries.map((country) => ({
      _id: country.countryInfo._id,
      name: country.country,
      flag: country.countryInfo.flag,
      iso2: country.countryInfo.iso2,
      iso3: country.countryInfo.iso3,
    }));
  }

  countriesList$: Observable<Country[]> = this.http
    .get<CreateCountriesDTO[]>(`${environment.api}/${this.countriesEndpoint}`)
    .pipe(map((countries) => this.parseCountries(countries)));

  selectedCountry$: Observable<Country> = combineLatest([
    this.countriesList$,
    this.selectedCountryAction$,
  ]).pipe(
    map(([countries, countryId]) => {
      return countries.find((country) => country._id === countryId);
    })
  );

  public setSelectedCountry(id: number): void {
    this.selectedCountrySubject.next(id);
  }

  constructor(private http: HttpClient) {}
}
