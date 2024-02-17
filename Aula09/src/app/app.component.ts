import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmmiterComponent } from './components/emmiter/emmiter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmmiterComponent, ChangeNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula09';
}
