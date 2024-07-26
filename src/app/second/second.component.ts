import {Component} from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  secondCompRangeValue = 10;

  updateValue(value: number) {
    this.secondCompRangeValue = value
  }
}
