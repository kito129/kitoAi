import {Component, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthenticationService} from "../../core/auth/authentication.service";
import EventEmitter from "events";

@Component({
  selector: 'kito-sidebar',
  standalone: true,
	imports: [CommonModule, MatDividerModule, MatListModule, MatSidenavModule, RouterLink, RouterOutlet],
  template: `
      <div class="container">
          <mat-sidenav-container class="sidenav-container">
              <mat-sidenav #sidenav mode="push">
                  <mat-nav-list>
                      <a *ngIf="!(authServices.isLogged$() | async), else logged" mat-list-item
                         routerLink="/auth/login">Login</a>
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


              </mat-sidenav-content>
          </mat-sidenav-container>
      </div>
  `,
  styles: ``
})
export class SidebarComponent {

	// emit sidenav ref to use in base component
	@Output() sidenav: EventEmitter = new EventEmitter();


	constructor(public authServices: AuthenticationService){}




}
