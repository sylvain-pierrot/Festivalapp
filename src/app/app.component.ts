import { Component } from '@angular/core';
import { Festival } from './models/festival';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FestivalApp';

  festivals!: Festival[];
  festivalSelected: Festival | null = null;
  constructor() {
    this.festivals = [
      new Festival('FJM 2018'),
      new Festival('FJM 2019'),
      new Festival('FJM 2020'),
    ];

    this.festivalSelected = this.festivals[0];
  }

  changeFestival(festival: Festival): void {
    this.festivalSelected = festival;
  }
}
