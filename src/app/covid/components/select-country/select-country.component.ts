import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    header: 'Select one country',
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
    console.log(this.selectedCountryId);
    if (!Boolean(this.selectedCountryId)) {
      return;
    }
    this.onCountrySelect.emit(this.selectedCountryId);
  }
}
