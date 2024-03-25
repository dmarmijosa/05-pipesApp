import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  nameLowerCase: string = 'DANNY';
  nameUpperCase: string = 'danny';
  nameTitleCase: string = 'danny Armijos';
  customDay: Date = new Date();

  constructor() {
    this.getClock().subscribe((time) => (this.customDay = time));
  }

  getClock(): Observable<Date> {
    return interval(1000).pipe(map(() => new Date()));
  }
}
