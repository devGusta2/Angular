import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfaceComponent } from './components/interface/interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula11';
}
