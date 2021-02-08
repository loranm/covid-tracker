import { createAction, props } from '@ngrx/store';
import { Stat } from 'src/app/shared/interfaces';

export const loadCovids = createAction('[Covid] Load Covids');

export const loadCovidsSuccess = createAction(
  '[Covid] Load Covids Success',
  props<{ stats: Stat }>()
);

export const loadCovidsFailure = createAction(
  '[Covid] Load Covids Failure',
  props<{ error: any }>()
);

export const loadCovidsForCountry = createAction(
  '[Covid] Load Covids for country',
  props<{ id: number }>()
);

export const loadCovidsForCountrySuccess = createAction(
  '[Covid] Load Covids for country',
  props<{ stats: Stat }>()
);
