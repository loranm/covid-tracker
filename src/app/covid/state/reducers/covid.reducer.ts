import { createReducer, on } from '@ngrx/store';
import { GraphDescription, Stat } from 'src/app/shared/interfaces';
import * as fromCovidActions from '../actions/covid.actions';

export const covidFeatureKey = 'covid';

export interface StatsState {
  worldwideStats: Stat;
  selectedCountryStats: Stat;
  graphDescription: GraphDescription;
}

export const initialState: StatsState = {
  worldwideStats: null,
  selectedCountryStats: null,
  graphDescription: null,
};

export const reducer = createReducer(
  initialState,
  on(fromCovidActions.loadCovidsSuccess, (state, { stats }) => ({
    ...state,
    worldwideStats: stats,
  })),
  on(fromCovidActions.loadCovidsForCountrySuccess, (state, { stats }) => ({
    ...state,
    selectedCountryStats: stats,
  }))
);
