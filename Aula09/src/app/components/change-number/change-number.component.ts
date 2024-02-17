import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any>= new EventEmitter();
  handleClick(){
    this.changeNumber.emit();
  }
}

// Quando é um dados para emiti-lo precisa somente do OUTPUT
//porém para enviar eventor é necessário um EventEmitter

