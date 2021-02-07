import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RemoteStatDto } from 'src/app/shared/dto/createStatDTO';
import { environment } from 'src/environments/environment';
import { CountriesService } from './countries.service';
import * as fromModel from '../../shared/interfaces';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class CovidService {
  parseHistoricalStats(stats): fromModel.graphDescription {
    return {
      lineChartLabels: Object.keys(stats.cases).map((value) =>
        moment(new Date(value)).format('ll')
      ),
      lineChartData: Object.entries(stats).map((entrie) => ({
        data: Object.values(entrie[1]),
        label: this.translate.instant(`COVID.MAIN.${entrie[0].toUpperCase()}`),
      })),
      lineChartOptions: {
        responsive: true,
      },
    };
  }

  private parseStat(stat: RemoteStatDto): fromModel.Stat {
    return { ...stat, updated: moment(stat.updated) };
  }

  private readonly globalStatsEndpoint = 'all?yesterday=';
  private readonly historicalStatsEndpoint = 'historical/all';

  globalStat$: Observable<fromModel.Stat> = this.http
    .get<RemoteStatDto>(`${environment.api}/${this.globalStatsEndpoint}`)
    .pipe(map((stat: RemoteStatDto) => this.parseStat(stat)));

  historicalStats$: Observable<any> = this.http
    .get<any>(`${environment.api}/${this.historicalStatsEndpoint}`)
    .pipe(map((stats) => this.parseHistoricalStats(stats)));

  countryStat$: Observable<fromModel.Stat> = this.countryService.selectedCountry$.pipe(
    switchMap((country) =>
      this.http.get<fromModel.Stat>(
        `${environment.api}/${this.countryService.countriesEndpoint}/${country.name}?yesterday=true&strict=true&query =`
      )
    )
  );

  constructor(
    private http: HttpClient,
    private countryService: CountriesService,
    private translate: TranslateService
  ) {}
}
