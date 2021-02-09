import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { CovidService } from '../../services/stats.service';
import * as fromActions from '../actions';
import * as fromCountryState from '../../../shared/state';
import { Store } from '@ngrx/store';

@Injectable()
export class Effects {
  loadStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCovids),
      mergeMap(() =>
        this.statsService
          .getWorldwideStats()
          .pipe(map((stats) => fromActions.loadCovidsSuccess({ stats })))
      )
    )
  );

  loadStatsForOneCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCountryState.selectCountry),
      switchMap(() =>
        this.store.select(fromCountryState.selectSelectedCountry)
      ),
      switchMap((country) =>
        this.statsService
          .getCountryStats(country)
          .pipe(
            map((stat) =>
              fromActions.loadCovidsForCountrySuccess({ stats: stat })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private statsService: CovidService,
    private store: Store
  ) {}
}
