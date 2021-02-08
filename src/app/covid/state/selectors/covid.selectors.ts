import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCovidReducer from '../reducers';

const getCovidFeatureState = createFeatureSelector<fromCovidReducer.StatsState>(
  fromCovidReducer.covidFeatureKey
);

export const selectWorldWideStats = createSelector(
  getCovidFeatureState,
  (state) => state.worldwideStats
);

export const selectStats = createSelector(getCovidFeatureState, (state) =>
  state.selectedCountryStats ? state.selectedCountryStats : state.worldwideStats
);
