import {inject} from '@angular/core';
import {HttpRequest,HttpHeaders, HttpHandlerFn
} from '@angular/common/http';
import {AuthenticationService} from "../auth/authentication.service";

export function TokenInterceptor (request: HttpRequest<unknown>, next: HttpHandlerFn) {
	const auth = inject(AuthenticationService);
	// console.log('\n\n --- Token Interceptor ---')

    const token = localStorage.getItem('token')
	let headers: HttpHeaders
	if(token){
		headers = new HttpHeaders({
			Authorization: `${auth.getSessionToken()}`,
			'content-Type': 'application/json',
		});
	} else {
		console.log('-> Not logged')
		auth.logout();
	}
	const cloneReq = request.clone({headers});
	return next(cloneReq)
}

