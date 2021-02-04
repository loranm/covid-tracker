import { RemoteStatDto } from './createStatDTO';

export class CreateCountryStatsDTO extends RemoteStatDto {
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
}
