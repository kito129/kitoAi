import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kito-base',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      base works!
    </p>
  `,
  styles: ``
})
export class BaseComponent {

}
