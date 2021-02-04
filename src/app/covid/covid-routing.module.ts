import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { CovidPage } from './pages/worldwide-stats/covid.page';

const routes: Routes = [
  {
    path: '',
    component: CovidPage,
  },
  { path: 'country/:countryId', component: CountryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidPageRoutingModule {}
