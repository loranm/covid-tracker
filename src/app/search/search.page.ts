import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  public onSearchValueChange(event) {
    console.log(
      '🚀 ~ file: search.page.ts ~ line 10 ~ SearchPage ~ onSearchValueChange ~ event',
      event
    );
  }
}
