import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  public getColor(value: string): string {
    const style = getComputedStyle(document.body);
    return style.getPropertyValue(value);
  }

  public getCurveBackgroundColor(value: string): string {
    const style = getComputedStyle(document.body);
    return `rgba(${style.getPropertyValue(value)}, 0.4)`;
  }

  constructor() {}
}
