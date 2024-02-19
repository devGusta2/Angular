import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals=[
    {name:"Mel", type:"Dog"},
    {name:"Tom", type:"Cat"},
    {name:"Bob", type:"Horse"},
    {name:"Sol", type:"Bird"},
  ]


  cars=[
    {nome:"Civic", marca:"Honda"},
    {nome:"Fit", marca:"Honda"},
    {nome:"Hilux", marca:"Toyota"},
    {nome:"Fusca", marca:"Ford"},
  ]


}
