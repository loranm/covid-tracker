import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteStatDto } from 'src/app/shared/dto/createStatDTo';
import { Stat } from 'src/app/shared/interfaces/stat';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  private parseStat(stat: RemoteStatDto): Stat {
    return { ...stat, updated: moment(stat.updated) };
  }
  private readonly endpoint = 'all?yesterday=';

  globalStat$: Observable<Stat> = this.http
    .get<RemoteStatDto>(`${environment.api}/${this.endpoint}`)
    .pipe(map((stat: RemoteStatDto) => this.parseStat(stat)));

  constructor(private http: HttpClient) {}
}
