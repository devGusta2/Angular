import { Component } from '@angular/core';
import { ListService } from '../../servicos/list.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    //(nome para diferenciar da classe) (tipo de dado  )
    constructor(private listService: ListService){

    }
}
