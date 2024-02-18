import { Component, Input } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';
@Component({
  selector: 'app-emmiter',
  standalone: true,
  imports: [ChangeNumberComponent],
  templateUrl: './emmiter.component.html',
  styleUrl: './emmiter.component.css',
 
})
export class EmmiterComponent {
  myNumber:number=0;

  onChangeNumber(){
    this.myNumber=Math.floor(Math.random()*10);
  }
  msngConsole(){
    console.log("Deu certo");
  }
  
}
