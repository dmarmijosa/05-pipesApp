import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
  totalSells:number =  912873645.2356;
  percent:number =  0.4567;

  ramdom = Math.random();

}
