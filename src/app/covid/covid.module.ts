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
import { SelectCountryComponent } from './components/select-country/select-country.component';
import { CovidPageRoutingModule } from './covid-routing.module';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { CovidPage } from './pages/covid-page/covid.page';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    FormsModule,
    IonicModule,
    CovidPageRoutingModule,
    SharedModule,
    ChartsModule,
  ],
  declarations: [
    CovidPage,
    CovidStatCardComponent,
    SelectCountryComponent,
    DateHolderComponent,
    CountryDetailsComponent,
    GraphComponent,
  ],
})
export class CovidPageModule {}
