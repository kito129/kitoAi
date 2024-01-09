import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {AuthenticationService} from "./core/auth/authentication.service";
import {MENU, MenuItem} from "./shared/models/menu";

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
              <!-- Header -->
              <mat-toolbar color="primary" class="fixed-top z-2">
                  <div class="container-fluid ">
                      <div class="row">
                          <div class="col  d-flex justify-content-start">
                              <button mat-icon-button (click)="sidenav.toggle()">
                                  <mat-icon>menu</mat-icon>
                              </button>
                          </div>
                          <div class="col d-flex justify-content-center">
                              <h2>Kito.ai  <mat-icon>donut_small</mat-icon> </h2>
                          </div>
                          <div class="col d-flex justify-content-end">
                              <button mat-icon-button *ngIf="(authServices.isLogged$() | async)" (click)="authServices.logout()">
                                  <mat-icon>logout</mat-icon>
                              </button>
                          </div>
                      </div>
                  </div>
              </mat-toolbar>

              <!-- Side Navigation -->
              <mat-sidenav-container>
                  <mat-sidenav #sidenav mode="over">
                      <mat-nav-list>
                          <a mat-list-item routerLink="/public">Public</a>
                          <mat-divider></mat-divider>
                          <ng-container *ngIf="!(authServices.isLogged$() | async), else logged">
                              <a mat-list-item routerLink="/auth/login">Login</a>
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
                  <mat-sidenav-content class="container-fluid" style="height: 100vh; padding-top: 70px">
                      <router-outlet class="router" ></router-outlet>
                  </mat-sidenav-content>
              </mat-sidenav-container>

              <!-- Footer -->
              <mat-toolbar class="fixed-bottom small text-white-50 text-center align-bottom" style="height: 30px">
                  <div class="container">
                      <div class="row">
                          <div class="col">
                              <p>Copyright © {{date.getFullYear()}} kito.ai. All rights reserved</p>
                          </div>
                          <div class="col">
                              <p>v0.0.2 - Build #: 2</p>
                          </div>
                          <div class="col">
                              <p>Build: 01-08-2024</p>
                          </div>
                      </div>
                  </div>
              </mat-toolbar>
          </div>

  `,  styleUrl: `./app.component.css`
})

export class AppComponent implements  OnInit{

    date: Date = new Date()
    menuItems: MenuItem[] = MENU.map(x => x);

    constructor(public authServices: AuthenticationService) {}

    ngOnInit() {
    }
}
