import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MomentModule } from 'ngx-moment';
import { CovidStatCardComponent } from './components/covid-stat-card/covid-stat-card.component';
import { DateHolderComponent } from './components/date-holder/date-holder.component';
import { SelectCountryComponent } from './components/select-country/select-country.component';
import { CovidPageRoutingModule } from './covid-routing.module';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { CovidPage } from './pages/worldwide-stats/covid.page';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    FormsModule,
    IonicModule,
    CovidPageRoutingModule,
  ],
  declarations: [
    CovidPage,
    CovidStatCardComponent,
    SelectCountryComponent,
    DateHolderComponent,
    CountryDetailsComponent,
  ],
})
export class CovidPageModule {}
