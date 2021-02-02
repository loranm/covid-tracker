import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidPage } from './pages/covid.page';

const routes: Routes = [
  {
    path: '',
    component: CovidPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidPageRoutingModule {}
