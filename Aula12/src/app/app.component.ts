import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComponent } from './components/pipe/pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula12';
}
