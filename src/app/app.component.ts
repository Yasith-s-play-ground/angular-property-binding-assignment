import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {FourthComponent} from "./fourth/fourth.component";
import {ThirdComponent} from "./third/third.component";
import {PercentPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent, FourthComponent, ThirdComponent, PercentPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parentValue = 10;

}
