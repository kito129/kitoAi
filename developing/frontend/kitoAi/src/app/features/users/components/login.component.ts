import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "../../../core/auth/authentication.service";
import {LoginData, UserResponse} from "../../../core/model/user";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ListAuthMethods, ServerResponse} from "../../../core/model/serverResponse";
import {Observable} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'kito-login',
  standalone: true,
	imports: [CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  template: `

	  <form #f="ngForm" (submit)="login(f)">
		  <mat-form-field appearance="fill" [ngClass]="{'error': f.invalid && f.dirty}">
			  <mat-label>Input</mat-label>
			  <input
				  matInput
				  type="text"
				  placeholder="Identity"
				  [ngModel]="defUser.identity"
				  name="identity"
				  #identityRef="ngModel"
				  required
			  />
			  <input
				  matInput
				  type="password"
				  placeholder="Your password"
				  [ngModel]="defUser.password"
				  name="pass"
				  required
			  />
			  <button
				  mat-icon-button
				  type="submit"
				  color="primary"

			  >
				  Login
			  </button>
		  </mat-form-field>
	  </form>


	  <ng-container *ngIf="userResponse$ | async">
		  {{userResponse$ | async | json}}
	  </ng-container>


  `,
  styles: ``
})
export class LoginComponent implements OnInit{

	defUser: LoginData = {
		identity: "",
		password: ""
	}

	listAuthMethods$: Observable<ListAuthMethods> = null
	userResponse$: Observable<UserResponse | ServerResponse>

	constructor(private authServices: AuthenticationService) {	}

	ngOnInit(): void {
		// this.listAuthMethods$ = this.authServices.getListAuthMethods()
	}

	login(f) {
		this.loginWithPassword({
			identity: f.value.identity,
			password: f.value.pass
		})
	}

	loginWithPassword(loginData: LoginData) {
		this.userResponse$ = this.authServices.authWithPassword(loginData.identity, loginData.password)
	}

}
