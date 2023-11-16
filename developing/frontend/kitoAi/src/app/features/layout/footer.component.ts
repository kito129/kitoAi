import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'kito-footer',
  standalone: true,
	imports: [CommonModule, MatToolbarModule],
  template: `
	  <mat-toolbar color="primary"  class="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
		  <p class="text-muted text-center text-md-left">Copyright © {{date.getFullYear()}} kito.ai. All rights reserved</p>
		  <p class="text-muted text-center center">v0.0.2</p>
		  <p class="text-muted text-center center">Build #: 1</p>
		  <p class="text-muted text-center center">Build: 11-16-2023</p>
		  <p class="text-muted text-center text-md-left mb-0 d-none d-md-block">Handcrafted With <i class="mb-1 text-primary ml-1 icon-small feather icon-heart"></i></p>
	  </mat-toolbar>

  `,
  styles: `
  	.footer {
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	}`
})
export class FooterComponent {

	date: Date = new Date()

}
