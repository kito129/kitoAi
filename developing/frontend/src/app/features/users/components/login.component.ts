import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "../../../core/auth/authentication.service";
import {LoginData, UserResponse} from "../model/user";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ListAuthMethods, ServerResponse} from "../../../core/model/serverResponse";
import {Observable} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {AdminAuthResponse} from "pocketbase";

@Component({
  selector: 'kito-login',
  standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatCardModule,
		ReactiveFormsModule
	],
  template: `
	  <div class="row">
		  <div class="col">
			  <div class="login-wrapper" fxLayout="row" fxLayoutAlign="center center">
				  <ng-template #unloged>
					  <mat-card>
						  <mat-card-header>
							  <mat-card-title>Log Out</mat-card-title>
						  </mat-card-header>
						  <mat-card-content>
							  <button
								  mat-raised-button
								  color="accent"
								  type="submit"
								  class="mr-2"
								  (click)="logout()">
								  Log Out
							  </button>
						  </mat-card-content>
					  </mat-card>
				  </ng-template>
				  <mat-card *ngIf="!(isLogged$ | async), else unloged" class="box">
					  <mat-card-header>
						  <mat-card-title>Log in</mat-card-title>
					  </mat-card-header>
					  <mat-card-content>
						  <form [formGroup]="loginForm">
							  <mat-form-field>
								  <input matInput
										 placeholder="Email"
										 formControlName="email"
										 type="email"
										 minlength="6">
								  <mat-error *ngIf="!loginForm.controls['email'].valid">Must be an Email and least 6
									  characters long.
								  </mat-error>
							  </mat-form-field>
							  <mat-form-field>
								  <input matInput
										 placeholder="Password"
										 formControlName="password"
										 type="password"
										 minlength="6">
								  <mat-error *ngIf="!loginForm.controls['password'].valid">Password must be 6 to 30
									  characters long.
								  </mat-error>
							  </mat-form-field>
						  </form>
					  </mat-card-content>
					  <mat-card-actions>
						  <div class="row">
							  <button
								  mat-raised-button
								  color="primary"
								  type="submit"
								  class="mr-2"
								  [disabled]="!loginForm.valid"
								  (click)="login(loginForm)">
								  Log in
							  </button>
							  <mat-error *ngIf="(userResponse$ | async)">
								  <p *ngIf="!(userResponse$ | async).admin">Credentials invalid</p>
							  </mat-error>
						  </div>
					  </mat-card-actions>
				  </mat-card>
			  </div>
		  </div>
	  </div>
  `,
  styles: ``
})
export class LoginComponent implements OnInit{

	loginForm: FormGroup
	userResponse$: Observable<AdminAuthResponse>
	isLogged$: Observable<boolean>
	constructor(private authServices: AuthenticationService, private fb: FormBuilder) {	}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(30)]],
			password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
		});
		this.userResponse$ = this.authServices.getAuthValue()
		this.isLogged$ = this.authServices.isLogged$()
	}

	login(loginForm) {
		this.userResponse$ = this.authServices.pocketBaseLogin(loginForm.value.email, loginForm.value.password)
	}

	logout(){
		this.authServices.logout()
	}

}
