import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { RemoteStatDto } from 'src/app/shared/dto/createStatDTO';
import { GraphDescription, Stat } from 'src/app/shared/interfaces';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  public parseHistoricalStats(stats): GraphDescription {
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

  public parseStat(stat: RemoteStatDto): Stat {
    return { ...stat, updated: moment(stat.updated) };
  }

  constructor(
    private translate: TranslateService,
    private color: ColorsService
  ) {}
}
