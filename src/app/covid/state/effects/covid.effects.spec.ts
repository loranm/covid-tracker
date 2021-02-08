import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CovidEffects } from './covid.effects';

describe('CovidEffects', () => {
  let actions$: Observable<any>;
  let effects: CovidEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CovidEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CovidEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
