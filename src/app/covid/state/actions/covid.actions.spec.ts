import * as fromCovid from './covid.actions';

describe('loadCovids', () => {
  it('should return an action', () => {
    expect(fromCovid.loadCovids().type).toBe('[Covid] Load Covids');
  });
});
