import { Component } from '@angular/core';
import {UpperCasePipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  texto:string="Bom dia";
  mensagem:string="titulo em title case";
}
