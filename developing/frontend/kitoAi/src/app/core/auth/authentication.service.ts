import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {UserResponse} from "../model/user";
import {ListAuthMethods, ServerResponse} from "../model/serverResponse";
import {Router} from "@angular/router";
import { Utils } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	utils = new Utils()
	prefix = environment.apiUrl

	constructor(private http: HttpClient, private router: Router) { }

	authWithPassword(identity: string, password: string): Observable<UserResponse | ServerResponse> {
		return this.http.post<UserResponse | ServerResponse>(`${this.prefix}/api/collections/users/auth-with-password`, { identity, password })
			.pipe(
				map((data: UserResponse | ServerResponse) => {
					if (data.hasOwnProperty('code')) {
						return data as ServerResponse;
					} else {
						const auth = data as UserResponse;
						console.log(auth)
						AuthenticationService.setSession(auth.token);
						if (localStorage.getItem('isLoggedin')) {
							this.router.navigate(['/home']);
						} else if((data as ServerResponse).code===401) {
							console.log('unauthorized')
						}
						return data as UserResponse;
					}
				}),
				catchError(this.utils.handleError)
			);
	}

	private static setSession(authResult) {
		localStorage.setItem('token', authResult);
		localStorage.setItem('isLogged', 'true');
	}
	public getToken(): string {
		return localStorage.getItem('token');
	}

	public isLogged(): Observable<boolean> {
		return of(localStorage.getItem('isLogged') === 'true' && localStorage.getItem('token') !== null)
	}

	logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('isLogged');
		if (!localStorage.getItem('isLogged')) {
			this.router.navigate(['/auth/login']);
		}
	}


	getListAuthMethods(): Observable<ListAuthMethods> {
		return this.http.get<ListAuthMethods>(`${this.prefix}/api/collections/users/auth-methods`)
	}

}
