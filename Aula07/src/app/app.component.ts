import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfRenderComponent } from './components/if-render/if-render.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IfRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula07';
}
