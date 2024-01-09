import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'kito-page',
  standalone: true,
    imports: [CommonModule, MatToolbarModule],
  template: `
      <div class="col p-2">
          <h1>{{title}}</h1>
          <p>{{subtitle}}</p>
      </div>
  `,
  styles: ``
})
export class PageComponent {

    @Input() title: string;
    @Input() subtitle: string;
    @Input() content: string;

}
