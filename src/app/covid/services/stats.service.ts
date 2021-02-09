import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RemoteStatDto } from 'src/app/shared/dto/createStatDTO';
import { environment } from 'src/environments/environment';
import { Country, GraphDescription, Stat } from '../../shared/interfaces';
import { UtilitiesService } from './utilities.service';
@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient, private utilities: UtilitiesService) {}

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
            map((stats) => this.utilities.parseHistoricalStats(stats.timeline)),
            catchError(this.handleError)
          )
      : this.http
          .get<any>(`${environment.api}/${this.historicalGlobalStatEndpoint}`)
          .pipe(
            map((stats) => this.utilities.parseHistoricalStats(stats)),
            catchError(this.handleError)
          );
  }

  getWorldwideStats(): Observable<Stat> {
    return this.http
      .get<RemoteStatDto>(`${environment.api}/${this.globalStatsEndpoint}`)
      .pipe(
        map((stat) => this.utilities.parseStat(stat)),
        catchError(this.handleError)
      );
  }

  getCountryStats(country: Country): Observable<Stat> {
    return this.http
      .get<RemoteStatDto>(
        `${environment.api}/countries/${country.name}${this.countryStatsEndpoint}`
      )
      .pipe(
        map((stats) => this.utilities.parseStat(stats)),
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
}
