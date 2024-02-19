import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula10';
}
