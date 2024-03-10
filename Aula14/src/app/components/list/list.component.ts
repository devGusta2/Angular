import { Component } from '@angular/core';
import { ListService } from '../../servicos/list.service';
import { Animal } from '../../Animal';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    animais:Animal[]=[
      {name:'mel',age:'5',type:'dog'},
      {name:'Tom',age:'5',type:'Cat'},
      {name:'Fubá',age:'5',type:'dog'}
    ]

    //(nome para diferenciar da classe) (tipo de dado  )
    constructor(private listService: ListService){

    }

    removeAnimal(animal:Animal){
      this.listService.remove(this.animais, animal);
    }
}
