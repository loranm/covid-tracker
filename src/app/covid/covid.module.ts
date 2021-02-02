import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

import { IonicModule } from '@ionic/angular';

import { CovidPageRoutingModule } from './covid-routing.module';

import { CovidPage } from './pages/covid.page';
import { CovidStatCardComponent } from './components/covid-stat-card/covid-stat-card.component';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    FormsModule,
    IonicModule,
    CovidPageRoutingModule,
  ],
  declarations: [CovidPage, CovidStatCardComponent],
})
export class CovidPageModule {}
