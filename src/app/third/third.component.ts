import {Component} from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  thirdCompRangeValue = 10;

  updateValue(value: number) {
    this.thirdCompRangeValue = value;
  }
}
