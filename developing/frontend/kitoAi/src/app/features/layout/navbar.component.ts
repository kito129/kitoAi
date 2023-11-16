import {Component, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import EventEmitter from "events";

@Component({
  selector: 'kito-navbar',
  standalone: true,
	imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  template: `
	  <mat-toolbar color="primary">

		  <button mat-icon-button (click)="sidenav.emit('true')">
			  <mat-icon>menu</mat-icon>
		  </button>

		  <h2>kito.Ai</h2>
		  <mat-icon>donut_small</mat-icon>

		  <span  class="flex"></span>

	  </mat-toolbar>
  `,
  styles: ``
})
export class NavbarComponent {

	// implement output function
	@Output() sidenav: EventEmitter = new EventEmitter();

	// implement toggle function



}
