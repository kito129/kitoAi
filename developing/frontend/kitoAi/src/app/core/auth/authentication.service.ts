import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {catchError, from, map, Observable, of, throwError} from "rxjs";
import {UserResponse} from "../../features/users/model/user";
import {ListAuthMethods, Pagination, ServerResponse} from "../model/serverResponse";
import {Router} from "@angular/router";
import { Utils } from '../../shared/utils';
// for login
import PocketBase, {AdminAuthResponse} from 'pocketbase';
import {Home} from "../../features/home/model/home";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	prefix = environment.apiUrl
	pb = new PocketBase('http://127.0.0.1:8090');
	adminAuthResponse: Observable<AdminAuthResponse> = new Observable<AdminAuthResponse>()

	adminAuth: Observable<HttpResponse<AdminAuthResponse>> = new Observable<HttpResponse<AdminAuthResponse>>()

	constructor(private http: HttpClient, private router: Router) { }

	pocketBaseLogin(identity: string, password: string): Observable<AdminAuthResponse> {
		return from(this.pb.admins.authWithPassword(identity, password)
			.then((authResponse: AdminAuthResponse)=>{
			// console.log(authResponse)
			if(authResponse.token) {
				AuthenticationService.setSessionToken(authResponse.token);
				if (localStorage.getItem('isLogged')) {
					this.adminAuthResponse = of(authResponse)
					console.log('logged in')
					this.router.navigate(['/home']);
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
					this.router.navigate(['/error']);
				}
				const errorResp: AdminAuthResponse = {
					token: null,
					error: err,
					admin: null,
				}
				return errorResp
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
