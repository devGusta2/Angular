import { Component } from '@angular/core';

@Component({
  selector: 'app-inter',
  standalone: true,
  imports: [InterComponent],
  templateUrl: './inter.component.html',
  styleUrl: './inter.component.css'
})
export class InterComponent {
  name:String="Gustavo";
  lastName="Souza";
  age="19";
  hobbie=["Program","Play guitar", "Games"];

  car={
    name:"Honda",
    model:"Civic",
  }
}
