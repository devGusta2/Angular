import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',//nome do que vamos importar
  standalone: true,
  imports: [FirstComponentComponent],
  templateUrl: './first-component.component.html',//caminho
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

}
