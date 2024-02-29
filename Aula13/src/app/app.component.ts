import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule}from '@angular/forms'
import { TwoWayDataBindComponent } from './components/two-way-data-bind/two-way-data-bind.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwoWayDataBindComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'two-way-data-bind';
}
