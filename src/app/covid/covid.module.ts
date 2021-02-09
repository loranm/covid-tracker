import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'ngx-moment';
import { SharedModule } from '../shared/shared.module';
import { CovidStatCardComponent } from './components/covid-stat-card/covid-stat-card.component';
import { DateHolderComponent } from './components/date-holder/date-holder.component';
import { GraphComponent } from './components/graph/graph.component';
import { CovidPageRoutingModule } from './covid-routing.module';
import { CovidPage } from './pages/covid-page/covid.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCovidState from './state';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    FormsModule,
    IonicModule,
    CovidPageRoutingModule,
    SharedModule,
    ChartsModule,
    StoreModule.forFeature(
      fromCovidState.covidFeatureKey,
      fromCovidState.reducer
    ),
    EffectsModule.forFeature([fromCovidState.Effects]),
  ],
  declarations: [
    CovidPage,
    CovidStatCardComponent,
    DateHolderComponent,
    GraphComponent,
  ],
})
export class CovidPageModule {}
