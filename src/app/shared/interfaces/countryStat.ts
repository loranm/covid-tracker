import { Country } from './country';
import { Stat } from './stat';

export interface CountryStat {
  info: Country;
  stats: Stat;
}
