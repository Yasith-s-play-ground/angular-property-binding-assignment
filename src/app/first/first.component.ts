import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  @Output("valueChange")
  emitter: EventEmitter<number> = new EventEmitter<number>();

  @Input("value")
  firstCompValue = 10;

  updateValue(value: number) {
    this.firstCompValue = value;
    this.emitter.emit(value);
  }
}
