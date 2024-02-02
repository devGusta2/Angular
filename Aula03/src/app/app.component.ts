import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteInterpolacaoComponent } from './components/componente-interpolacao/componente-interpolacao.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteInterpolacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula03';
}
