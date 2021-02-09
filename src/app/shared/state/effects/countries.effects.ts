import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CountriesService } from '../../services/countries.service';

import * as fromCountriesActions from '../actions';

@Injectable()
export class Effects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCountriesActions.loadCountries),
      mergeMap(() => {
        return this.countriesService.countriesList$.pipe(
          map((countries) =>
            fromCountriesActions.loadCountriesSuccess({ countries: countries })
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
  ) {}
}
