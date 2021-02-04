import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Country } from 'src/app/shared/interfaces/country';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss'],
})
export class SelectCountryComponent {
  @Input() countries: Country[];
  @Output() onCountrySelect = new EventEmitter<number>();

  private readonly _customAlertOptions = {
    header: this.translate.instant('COVID.MAIN.SELECT.PLACEHOLDER'),
    translucent: true,
  };

  public readonly icons = {
    eye: 'eye',
    eyeOff: 'eye-off',
  };

  private _selectedCountryId: number = null;

  get selectedCountryId(): number {
    return this._selectedCountryId;
  }

  set selectedCountryId(country: number) {
    this._selectedCountryId = country;
  }

  get customAlertOptions() {
    return this._customAlertOptions;
  }

  public onClick() {
    if (!Boolean(this.selectedCountryId)) {
      return;
    }
    this.onCountrySelect.emit(this.selectedCountryId);
  }

  constructor(private translate: TranslateService) {}
}
