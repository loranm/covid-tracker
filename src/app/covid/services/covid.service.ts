import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RemoteStatDto } from 'src/app/shared/dto/createStatDTO';
import { Stat } from 'src/app/shared/interfaces/stat';
import { environment } from 'src/environments/environment';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  private parseStat(stat: RemoteStatDto): Stat {
    return { ...stat, updated: moment(stat.updated) };
  }

  private readonly globalStatsEndpoint = 'all?yesterday=';

  globalStat$: Observable<Stat> = this.http
    .get<RemoteStatDto>(`${environment.api}/${this.globalStatsEndpoint}`)
    .pipe(map((stat: RemoteStatDto) => this.parseStat(stat)));

  countryStat$: Observable<Stat> = this.countryService.selectedCountry$.pipe(
    switchMap((country) =>
      this.http.get<Stat>(
        `${environment.api}/${this.countryService.countriesEndpoint}/${country.name}?yesterday=true&strict=true&query =`
      )
    )
  );

  constructor(
    private http: HttpClient,
    private countryService: CountriesService
  ) {}
}
