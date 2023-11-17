import {inject} from '@angular/core';
import {
	HttpRequest, HttpHeaders, HttpHandlerFn, HttpErrorResponse
} from '@angular/common/http';
import {AuthenticationService} from "../auth/authentication.service";
import {catchError, throwError} from "rxjs";
import {ServerResponse} from "../model/serverResponse";

export function ErrorInterceptor (request: HttpRequest<any>, next: HttpHandlerFn) {
	const auth = inject(AuthenticationService);
	console.log('Error Interceptor')
	return next(request).pipe(catchError((err) => {


		console.log('catch error')
		console.log(err.status)
		if ([401, 403].includes(err.status)) {
			// auto logout if 401 or 403 response returned from api
			console.log('Not logged, token expired')
			auth.logout();
		} else if([400].includes(err.status)) {
			// auto logout if 401 or 403 response returned from api
			console.log('Auth Failed')
		}
		const error = err.message;
		// console.error(err);
		return throwError(() => null);
	}))
}

