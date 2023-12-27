import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from "../auth/authentication.service";
import {inject} from "@angular/core";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	const router = inject(Router);
	const auth = inject(AuthenticationService);
	if (auth.isLogged$()){
		return true;
	}
	// not logged in so redirect to login page with the return url
	router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
	return false;
};
