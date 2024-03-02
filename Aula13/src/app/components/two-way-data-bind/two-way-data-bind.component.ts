import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-two-way-data-bind',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-data-bind.component.html',
  styleUrl: './two-way-data-bind.component.css'
})
export class TwoWayDataBindComponent {
  name:string="";

}
