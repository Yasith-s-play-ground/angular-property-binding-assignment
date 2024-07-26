import {Component} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {
  borderRadius = 0;
  borderRadiusStyle = "border-radius:" + this.borderRadius + "%";

  updateValue(value: number) {
    this.borderRadius = value;
  }
}
