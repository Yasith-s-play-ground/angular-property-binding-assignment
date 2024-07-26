import {Component, Input} from '@angular/core';
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
  @Input("value")
  borderRadius = 0;

}
