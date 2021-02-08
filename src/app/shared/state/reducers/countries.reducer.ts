import { createReducer, on } from '@ngrx/store';
import { Country } from '../../interfaces';
import * as fromCountriesActions from '../actions';

export const sharedFeatureKey = 'shared';

export interface SharedState {
  countries: Country[];
  selectedCountry: Country;
}

export const initialState: SharedState = {
  countries: null,
  selectedCountry: null,
};

export const reducer = createReducer(
  initialState,
  on(fromCountriesActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
  })),
  on(fromCountriesActions.selectCountry, (state, { id }) => ({
    ...state,
    selectedCountry: state.countries.find((country) => country._id === id),
  }))
);
