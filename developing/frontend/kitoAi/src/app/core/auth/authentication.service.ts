import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, from, map, Observable, of, throwError} from "rxjs";
import {UserResponse} from "../../features/users/model/user";
import {ListAuthMethods, ServerResponse} from "../model/serverResponse";
import {Router} from "@angular/router";
import { Utils } from '../../shared/utils';
// for login
import PocketBase, {AdminAuthResponse} from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	prefix = environment.apiUrl
	pb = new PocketBase('http://127.0.0.1:8090');
	adminAuthResponse: Observable<AdminAuthResponse> = new Observable<AdminAuthResponse>()

	constructor(private http: HttpClient, private router: Router) { }

	pocketBaseLogin(identity: string, password: string): Observable<AdminAuthResponse | void> {
		return from(this.pb.admins.authWithPassword(identity, password)
			.then((authResponse: AdminAuthResponse)=>{
			// console.log(authResponse)
			if(authResponse.token) {
				AuthenticationService.setSessionToken(authResponse.token);
				if (localStorage.getItem('isLogged')) {
					this.adminAuthResponse = of(authResponse)
					// this.router.navigate(['/home']);
					console.log('logged in')
				}
				return authResponse
			} else {
				return null
			}
			}).catch((err: HttpErrorResponse)=>{
				if(err.status === 401 || err.status === 400){
					console.log('unauthorized')
				} else if(err.status === 500) {
					console.log('server error')
				}
				// console.log(err)
			}))


	}

	// private so no one outside this service can call it
	private static setSessionToken(authToken) {
		localStorage.setItem('token', authToken);
		localStorage.setItem('isLogged', 'true');
	}
	getSessionToken(): string {
		if(localStorage.getItem('isLogged') === 'true' && localStorage.getItem('token') !== null){
			return localStorage.getItem('token');
		} else {
			return null
		}
	}

	getAuthValue(): Observable<AdminAuthResponse>{
		return  this.adminAuthResponse
	}

	isLogged(): boolean {
		return localStorage.getItem('isLogged') === 'true' && localStorage.getItem('token') !== null
	}

	isLogged$(): Observable<boolean> {
		return of(localStorage.getItem('isLogged') === 'true' && localStorage.getItem('token') !== null)
	}

	logout() {
		console.log('logging out..')
		localStorage.removeItem('token');
		localStorage.removeItem('isLogged');
		if (!localStorage.getItem('isLogged')) {
			this.router.navigate(['/auth/login']);
		}
		console.log('logged out')
	}

}
