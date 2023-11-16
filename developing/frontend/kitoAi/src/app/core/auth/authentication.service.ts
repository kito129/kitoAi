import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {UserResponse} from "../model/user";
import {ListAuthMethods, ServerResponse} from "../model/serverResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	prefix = environment.apiUrl

	constructor(private http: HttpClient) { }

	authWithPassword(identity: string, password: string): Observable<UserResponse | ServerResponse> {
		return this.http.post<UserResponse | ServerResponse>(`${this.prefix}/api/collections/users/auth-with-password`, { identity, password })
			.pipe(
				map((data: UserResponse | ServerResponse) => {
					if (data.hasOwnProperty('code')) {
						return data as ServerResponse;
					} else {
						return data as UserResponse;
					}
				}),
				catchError(this.handleError)
			);
	}

	getListAuthMethods(): Observable<ListAuthMethods> {
		return this.http.get<ListAuthMethods>(`${this.prefix}/api/collections/users/auth-methods`)
	}

	private handleError(error: HttpErrorResponse): Observable<never> {
		let errorMessage = 'An unknown error occurred';

		if (error.error instanceof ErrorEvent) {
			// Client-side errors
			errorMessage = `Error: ${error.error.message}`;
		} else {
			// Server-side errors
			if (error.status === 404) {
				errorMessage = 'Resource not found. Please check the URL.';
			} else {
				errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
			}
		}

		// You can log the error or display it in a user-friendly way
		console.error(errorMessage);

		// Return an observable with a user-facing error message
		return throwError(errorMessage);
	}

}
