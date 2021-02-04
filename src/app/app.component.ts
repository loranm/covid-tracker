import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.setDefaultTranslationLanguage();
  }

  private setDefaultTranslationLanguage() {
    const supportedLanguages = ['en', 'fr'];
    const browserLang = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use(
      supportedLanguages.includes(browserLang)
        ? browserLang
        : supportedLanguages[0]
    );
    this.setDefaultTimeAndDateLocale(browserLang);
  }

  private setDefaultTimeAndDateLocale(browserLang: string) {
    moment.locale(browserLang);
  }
}
