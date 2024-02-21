import { Component } from '@angular/core';
import { Animal } from '../../Animal';
@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css'
})
export class InterfaceComponent {
  animalDetails='';
  showAge(Animal:Animal){
    this.animalDetails="O pet ${animal.name} tem ${animal.age} anos!"
  }
  animals:Animal[]=[
    {name:"Mel", type:"Dog", age:9},
    {name:"Scooby", type:"Dog", age:5}
  ]
}
