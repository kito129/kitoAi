import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kito-public',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      public works!
    </p>
  `,
  styles: ``
})
export class PublicComponent {

}
