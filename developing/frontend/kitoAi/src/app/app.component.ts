import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {AuthenticationService} from "./core/auth/authentication.service";
import {MENU, MenuItem} from "./shared/menu";

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
          <mat-toolbar color="primary" class="toolbar">

              <div class="toolbar-left">
                  <button mat-icon-button (click)="sidenav.toggle()">
                      <mat-icon>menu</mat-icon>
                  </button>

                  <h2>{{title}}</h2>
                  <mat-icon>donut_small</mat-icon>
              </div>

              <div class="toolbar-right">
                  <button mat-icon-button
                          *ngIf="(authServices.isLogged$() | async)"
                          (click)="authServices.logout()">
                      <mat-icon>logout</mat-icon>
                  </button>
              </div>

          </mat-toolbar>

          <div class="container">
			  <mat-sidenav-container class="sidenav-container">
				  <mat-sidenav #sidenav mode="over" class="sidenav">
					  <mat-nav-list>
						  <a mat-list-item routerLink="/public">Public</a>
						  <mat-divider></mat-divider>
						  <ng-container *ngIf="!(authServices.isLogged$() | async), else logged">
							  <a mat-list-item
								 routerLink="/auth/login">Login</a>
						  </ng-container>
						  <ng-template #logged>
                              <a *ngFor="let item of menuItems" mat-list-item [routerLink]="item.link">
                                  {{item.label}}
                              </a>
							  <mat-divider></mat-divider>
							  <a mat-list-item (click)="authServices.logout()">LogOut</a>
						  </ng-template>
					  </mat-nav-list>
				  </mat-sidenav>
				  <!-- Main Content Area -->
				  <mat-sidenav-content>
					  <router-outlet class="router"></router-outlet>
				  </mat-sidenav-content>
			  </mat-sidenav-container>
          </div>

          <mat-toolbar color="primary" class="footer">
              <p class="footer-left">Copyright © {{date.getFullYear()}}kito.ai. All rights reserved</p>

              <div class="footer-center">
                  <p class="mt-2">v0.0.2</p>
                  <p class="mt-2">Build #: 1</p>
                  <p class="mt-2">Build: 11-16-2023</p>
              </div>

          </mat-toolbar>


      </div>
  `,  styles: `
	.wrapper {
	  display: flex;
	  flex-direction: column;
	  height: 100vh;
	}


  	.router{
	  padding: 10px;
  	}

	.toolbar {
	  position: fixed;
	  top: 0;
	  width: 100%;
	  height: 50px;
	  color: white;
	  z-index: 10;
	}

	.toolbar-left {
      display: flex; /* Create left section */
      align-items: center;
    }

    .toolbar-right {
      margin-left: auto;
      align-items: right;
    }

	.container {
	  flex: 1;
	  display: flex;
	}

	.sidenav-container {
	  flex: 1;
	  top: 50px;
	}

	.sidenav{
	    top: 50px;
	    position: fixed;
	}

    .footer {
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	  height: 30px;
	  font-size: 12px;
	  color: lightgray;
	  z-index: 9;
	}

	.footer-left {
      display: flex; /* Create first column */
      text-align: left;
    }

    .footer-center {
      display: flex; /* Create second column */
      text-align: center;
    }

    .footer-right {
      display: flex; /* Create third column */
      text-align: right;
    }

  `,
})
export class AppComponent implements  OnInit{
    title = 'kitoAi';

    date: Date = new Date()

    menuItems: MenuItem[] = MENU.map(x => x);

    constructor(public authServices: AuthenticationService) {}

    ngOnInit() {
    }
}
