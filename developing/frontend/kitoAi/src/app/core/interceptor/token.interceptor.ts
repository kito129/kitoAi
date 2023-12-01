import {inject} from '@angular/core';
import {HttpRequest,HttpHeaders, HttpHandlerFn
} from '@angular/common/http';
import {AuthenticationService} from "../auth/authentication.service";

export function TokenInterceptor (request: HttpRequest<any>, next: HttpHandlerFn) {
	const auth = inject(AuthenticationService);
	// console.log('\n\n --- Token Interceptor ---')
	let headers: HttpHeaders
	if(auth.isLogged()){
		headers = new HttpHeaders({
			Authorization: `${auth.getSessionToken()}`,
			'content-Type': 'application/json',
		});
	} else {
		console.log('-> Not logged')
	}
	const cloneReq = request.clone({headers});
	console.log(cloneReq)
	return next(cloneReq)
}

