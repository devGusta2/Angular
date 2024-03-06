import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from './Animal';
import { ListService } from './servicos/list.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  animais:Animal[]=[
    {name:'mel',age:'5',type:'dog'},
    {name:'Tom',age:'5',type:'Cat'},
    {name:'Fubá',age:'5',type:'dog'}
  ]


  constructor(private listService: ListService){}

}
