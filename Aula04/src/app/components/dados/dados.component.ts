import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  @Input() name:String = "";//iniciado vazio
  @Input()userData!:{email:String, role:String}// nao está iniciado no momento mas vai ser inicializado
  
}
