import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  size=40;
  font='arial';
  color='red';

  underline="underline"
  classes=["green-title", "small-title"]
}
