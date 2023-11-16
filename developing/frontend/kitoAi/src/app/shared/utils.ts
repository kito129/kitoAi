import {HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

export class Utils {
	public handleError(error: HttpErrorResponse): Observable<never> {
		let errorMessage = 'An unknown error occurred';
		console.log(error)

		if (error.error instanceof ErrorEvent) {
			errorMessage = `Error: ${error.error.message}`;
		} else {
			if (error.status === 404) {
				errorMessage = 'Resource not found. Please check the URL.';
			} else if (error.status === 403) {
				errorMessage = '"Forbidden, Only admins can perform this action."';
			} else if (error.status === 500) {
				errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
			}
		}
		console.log(errorMessage)
		return throwError(errorMessage);
	}
}

