import {inject} from '@angular/core';
import {HttpRequest,HttpHeaders, HttpHandlerFn
} from '@angular/common/http';
import {AuthenticationService} from "../auth/authentication.service";

export function TokenInterceptor (request: HttpRequest<any>, next: HttpHandlerFn) {
	const auth = inject(AuthenticationService);
	console.log('Token Interceptor')
	let headers: HttpHeaders
	if(auth.isLogged()){
		headers = new HttpHeaders({
			Authorization: `${auth.getToken()}`,
			'Content-Type': 'application/json',
		});
	} else {
		console.log('not logged')
	}
	const cloneReq = request.clone({headers});
	return next(cloneReq)
}

