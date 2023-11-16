import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "../../../core/auth/authentication.service";
import {LoginData, UserResponse} from "../../../core/model/user";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ListAuthMethods, ServerResponse} from "../../../core/model/serverResponse";
import {Observable} from "rxjs";

@Component({
  selector: 'kito-login',
  standalone: true,
	imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `

		<button mat-icon-button (click)="loginWithPassword(this.defUser)">
			<mat-icon>login</mat-icon>
		</button>

		<pre *ngIf="userResponse$ | async">
			{{userResponse$ | async | json}}
		</pre>

  `,
  styles: ``
})
export class LoginComponent implements OnInit{

	defUser: LoginData = {
		identity: "marco",
		password: "65255"
	}


	listAuthMethods$: Observable<ListAuthMethods> = null
	userResponse$: Observable<UserResponse | ServerResponse> = null

	constructor(private authServices: AuthenticationService) {	}

	ngOnInit(): void {
		this.listAuthMethods$= this.authServices.getListAuthMethods()
	}

	loginWithPassword(loginData: LoginData) {
		this.userResponse$ = this.authServices.authWithPassword(loginData.identity, loginData.password)
	}

}
