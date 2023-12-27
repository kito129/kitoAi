import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'kito-public',
  standalone: true,
    imports: [CommonModule, MatProgressBarModule],
  template: `
     <h1>Welcome in kito.ai!</h1>
     <p>Site is under costruction using angular v17 and pocketbase & fastify as backend.</p>
     <mat-progress-bar mode="buffer" value="30" bufferValue="60"></mat-progress-bar>
  `,
  styles: ``
})
export class PublicComponent {

}
