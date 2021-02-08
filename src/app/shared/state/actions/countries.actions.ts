import { createAction, props } from '@ngrx/store';
import { Country } from '../../interfaces';

export const loadCountries = createAction('[Countries] Load Countries');

export const loadCountriesSuccess = createAction(
  '[Countries] Load Countries Success',
  props<{ countries: Country[] }>()
);

export const loadCountriesFailure = createAction(
  '[Covid] Load Countries Failure',
  props<{ error: any }>()
);

export const selectCountry = createAction(
  '[Covid] Select Country',
  props<{ id?: number }>()
);
