import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {AuthenticationService} from "./core/auth/authentication.service";

@Component({
  selector: 'kito-root',
  standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule
	],
  template: `
	  <div class="wrapper">
		  <mat-toolbar color="primary">

			  <button mat-icon-button (click)="sidenav.toggle()">
				  <mat-icon>menu</mat-icon>
			  </button>

			  <h2>{{title}}</h2>
			  <mat-icon>donut_small</mat-icon>

			  <span  class="flex"></span>
			  <button mat-icon-button (click)="sidenav.toggle()">
				  <mat-icon>user</mat-icon>
			  </button>

		  </mat-toolbar>

		  <div class="container">
			  <mat-sidenav-container class="sidenav-container">
				  <mat-sidenav #sidenav mode="push">
					  <mat-nav-list>
						  <a *ngIf="!(authServices.isLogged() | async), else logged" mat-list-item routerLink="/auth/login">Login</a>
						  <ng-template #logged>
							  <a mat-list-item routerLink="/">Home</a>
							  <a mat-list-item routerLink="/projects">Projects</a>
							  <mat-divider></mat-divider>
							  <a  mat-list-item (click)="authServices.logout()">LogOut</a>
						  </ng-template>
					  </mat-nav-list>
				  </mat-sidenav>
				  <!-- Main Content Area -->
				  <mat-sidenav-content>
					  <router-outlet></router-outlet>
				  </mat-sidenav-content>
			  </mat-sidenav-container>
		  </div>

		  <mat-toolbar color="primary" class="footer">
			  <!-- Footer Content -->
			  <!-- Add your footer content here -->
		  </mat-toolbar>
	  </div>
  `,  styles: `

	.wrapper {
	  display: flex;
	  flex-direction: column;
	  height: 100vh;
	}

	.container {
	  flex: 1;
	  display: flex;
	}

	.sidenav-container {
	  flex: 1;
	}

	.footer {
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	}

	.spacer {
	  flex: 1 1 auto;
	}
  `,
})
export class AppComponent implements  OnInit{
  title = 'kitoAi';

  constructor(public authServices: AuthenticationService) {}

	ngOnInit() {
	}
}
