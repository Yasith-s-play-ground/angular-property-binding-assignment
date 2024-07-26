import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  @Output("update")
  emitter: EventEmitter<number> = new EventEmitter<number>();

  @Input("value")
  thirdCompRangeValue = 10;

  updateValue(value: number) {
    this.thirdCompRangeValue = value;
    this.emitter.emit(value);
  }
}
