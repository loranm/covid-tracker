import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCountriesReducer from '../reducers';

const getCountriesFeatureState = createFeatureSelector<fromCountriesReducer.SharedState>(
  fromCountriesReducer.sharedFeatureKey
);

export const selectCountries = createSelector(
  getCountriesFeatureState,
  (state) => state.countries
);

export const selectSelectedCountry = createSelector(
  getCountriesFeatureState,
  (state) => state.selectedCountry
);
