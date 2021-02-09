import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RemoteStatDto } from 'src/app/shared/dto/createStatDTO';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Country, GraphDescription, Stat } from '../../shared/interfaces';
import { ColorsService } from 'src/app/shared/services/colors.service';
@Injectable({
  providedIn: 'root',
})
export class CovidService {
  parseHistoricalStats(stats): GraphDescription {
    return {
      lineChartLabels: Object.keys(stats.cases).map((value) => {
        return moment(new Date(value)).format('LL');
      }),
      lineChartData: Object.entries(stats).map((entrie) => ({
        data: Object.values(entrie[1]),
        label: this.translate.instant(`COVID.MAIN.${entrie[0].toUpperCase()}`),
      })),
      lineChartOptions: {
        responsive: true,
      },
      lineChartColors: [
        {
          borderColor: this.color.getColor('--ion-color-primary'),
          backgroundColor: this.color.getCurveBackgroundColor(
            '--ion-color-primary-rgb'
          ),
        },
        {
          borderColor: this.color.getColor('--ion-color-danger'),
          backgroundColor: this.color.getCurveBackgroundColor(
            '--ion-color-danger-rgb'
          ),
        },
        {
          borderColor: this.color.getColor('--ion-color-success'),
          backgroundColor: this.color.getCurveBackgroundColor(
            '--ion-color-success-rgb'
          ),
        },
      ],
    };
  }

  private parseStat(stat: RemoteStatDto): Stat {
    return { ...stat, updated: moment(stat.updated) };
  }

  private readonly globalStatsEndpoint = 'all?yesterday=';
  private readonly countryStatsEndpoint = '?yesterday=true&strict=true&query=';
  private readonly historicalGlobalStatEndpoint = 'historical/all';
  private readonly historicalCountryStatEndpoint = 'historical';

  getHistoricalStats(country?: Country): Observable<GraphDescription> {
    return country
      ? this.http
          .get<any>(
            `${environment.api}/${this.historicalCountryStatEndpoint}/${country.name}?lastdays=30`
          )
          .pipe(
            map((stats) => this.parseHistoricalStats(stats.timeline)),
            catchError(this.handleError)
          )
      : this.http
          .get<any>(`${environment.api}/${this.historicalGlobalStatEndpoint}`)
          .pipe(
            map((stats) => this.parseHistoricalStats(stats)),
            catchError(this.handleError)
          );
  }

  getWorldwideStats(): Observable<Stat> {
    return this.http
      .get<RemoteStatDto>(`${environment.api}/${this.globalStatsEndpoint}`)
      .pipe(
        map((stat) => this.parseStat(stat)),
        catchError(this.handleError)
      );
  }

  getCountryStats(country: Country): Observable<Stat> {
    return this.http
      .get<RemoteStatDto>(
        `${environment.api}/countries/${country.name}${this.countryStatsEndpoint}`
      )
      .pipe(
        map((stats) => this.parseStat(stats)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private color: ColorsService
  ) {}
}
