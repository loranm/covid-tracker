import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from './factories/httpLoader';
import { CountriesService } from './services/countries.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCountriesState from './state';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forFeature(
      fromCountriesState.sharedFeatureKey,
      fromCountriesState.reducer
    ),
    EffectsModule.forFeature([fromCountriesState.Effects]),
  ],
  providers: [CountriesService],
  exports: [TranslateModule],
})
export class SharedModule {}
