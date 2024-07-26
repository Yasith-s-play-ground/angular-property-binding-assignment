import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Output("update")
  emitter: EventEmitter<number> = new EventEmitter<number>();

  @Input("value")
  secondCompRangeValue = 10;

  updateValue(value: number) {
    this.secondCompRangeValue = value;
    this.emitter.emit(value);
  }
}
