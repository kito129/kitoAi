import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {AuthenticationService} from "../core/auth/authentication.service";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(public auth: AuthenticationService) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// check logged and add token
		const headers = new HttpHeaders({
			Authorization: `${this.auth.getToken()}`,
			'Content-Type': 'application/json',
		});
		const cloneReq = request.clone({headers});
		// handle errors
		return next.handle(cloneReq).pipe(
			catchError((error: HttpErrorResponse) => {
				// Handle HTTP errors
				switch (error.status) {
					case 400:
						// Unauthorized: Redirect to login or perform other actions
						console.error('Interceptor: Failed authentication');
						break;
					case 401:
						// Unauthorized: Redirect to login or perform other actions
						console.error('Interceptor: Unauthorized request');
						break;
					case 403:
						// Forbidden: Handle accordingly
						console.error('Interceptor: Forbidden request');
						break;
					case 404:
						// Not Found: Handle accordingly
						console.error('Interceptor: Resource not found');
						break;
					case 500:
						// Internal Server Error: Handle accordingly
						console.error('Interceptor: Internal Server Error');
						break;
					default:
						// Handle other error codes
						console.error(`Interceptor: An unexpected error occurred: ${error.status}`);
						break;
				}

				// Propagate the error
				return throwError(error);
			})
		);
	}
}
