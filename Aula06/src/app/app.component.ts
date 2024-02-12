import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectiveComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myname="Gustavo";
  title = 'Aula06';
}
