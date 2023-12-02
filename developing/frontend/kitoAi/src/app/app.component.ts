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

              <span class="flex"></span>
              <button mat-icon-button (click)="sidenav.toggle()">
                  <mat-icon>user</mat-icon>
              </button>

          </mat-toolbar>

          <div class="container">
			  <mat-sidenav-container class="sidenav-container">
				  <mat-sidenav #sidenav mode="push">
					  <mat-nav-list>
						  <a mat-list-item routerLink="/public">Public</a>
						  <mat-divider></mat-divider>
						  <ng-container *ngIf="!(authServices.isLogged$() | async), else logged">
							  <a mat-list-item
								 routerLink="/auth/login">Login</a>
						  </ng-container>
						  <ng-template #logged>
							  <a mat-list-item routerLink="/">Home</a>
							  <a mat-list-item routerLink="/projects">Projects</a>
							  <mat-divider></mat-divider>
							  <a mat-list-item (click)="authServices.logout()">LogOut</a>
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
              <p class="text-center text-md-left">Copyright © {{date.getFullYear()}}kito.ai. All rights reserved</p>
              <p class="text-center center">v0.0.2</p>
              <p class="text-center center">Build #: 1</p>
              <p class="text-center center">Build: 11-16-2023</p>
              <p class="text-center text-md-left mb-0 ">Handcrafted With <i
                      class="mb-1 text-primary ml-1 icon-small feather icon-heart"></i></p>
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
	  width: 100%;
	  margin-top: auto;
	}

	.spacer {
	  flex: 1 1 auto;
	}
  `,
})
export class AppComponent implements  OnInit{
  title = 'kitoAi';

  date: Date = new Date()

  constructor(public authServices: AuthenticationService) {}

	ngOnInit() {
	}
}
