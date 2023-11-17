import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {APP_ROUTES} from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
	HTTP_INTERCEPTORS,
	provideHttpClient,
	withFetch,
	withInterceptors,
	withInterceptorsFromDi
} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptor/token.interceptor";
import {ErrorInterceptor} from "./core/interceptor/error.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
	  provideRouter(APP_ROUTES),
	  provideAnimations(),
	  provideHttpClient(withInterceptors([
		  TokenInterceptor,
		  ErrorInterceptor,
	  ]))
	  //provideClientHydration(),

  ]
};
