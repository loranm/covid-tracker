import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/shared/interfaces';

@Pipe({
  name: 'filterCountries',
})
export class FilterCountriesPipe implements PipeTransform {
  transform(countries: Country[], filterTerm: string): Country[] {
    return filterTerm
      ? countries.filter((country) =>
          country.name.toLocaleLowerCase().startsWith(filterTerm)
        )
      : countries;
  }
}
