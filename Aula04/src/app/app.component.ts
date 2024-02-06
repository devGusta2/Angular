import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosComponent } from './components/dados/dados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username="Gustavo";
  userData={
    email:"Gustavo@gmail.com",
    role:"Admin",
  }

  title = 'Aula04';
}
