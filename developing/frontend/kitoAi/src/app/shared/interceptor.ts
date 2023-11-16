import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {AuthenticationService} from "../core/auth/authentication.service";
import {Observable} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(public auth: AuthenticationService) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log("interceptor http and add toke cause im logged")
		const headers = new HttpHeaders({
			Authorization: `${this.auth.getToken()}`,
			'Content-Type': 'application/json',
		});
		const cloneReq = request.clone({headers});
		return next.handle(cloneReq)
	}
}
