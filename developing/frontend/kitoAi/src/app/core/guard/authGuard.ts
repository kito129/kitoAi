import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  return !!localStorage.getItem('isLogged');
};
