import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterComponent } from './components/inter/inter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula03';
}
