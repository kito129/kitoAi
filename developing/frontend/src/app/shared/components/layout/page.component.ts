import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'kito-page',
  standalone: true,
    imports: [CommonModule, MatToolbarModule],
  template: `
      <mat-toolbar class="page-header">
          <h1>{{title}}</h1>
          <h4>{{subtitle}}</h4>
      </mat-toolbar>
  `,
  styles: ``
})
export class PageComponent {

    @Input() title: string;
    @Input() subtitle: string;
    @Input() content: string;

}
