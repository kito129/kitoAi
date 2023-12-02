import { Routes } from '@angular/router';
import {AuthGuard} from "./core/guard/authGuard";
import {BaseComponent} from "./features/layout/base.component";
import {ErrorPageComponent} from "./features/error/error-page.component";
import {LoginComponent} from "./features/users/components/login.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./features/home/components/home.component";
import {ProjectsComponent} from "./features/projects/components/projects.component";
import {PROJECTS_ROUTES} from "./features/projects/projects.routes";

const projectsRoutes = () => import('./features/projects/projects.routes').then(x => x.PROJECTS_ROUTES);
const publicRoutes = () => import('./features/public/public.routes').then(x => x.PUBLIC_ROUTES);


export const APP_ROUTES: Routes = [
	{ path: 'auth/login', component: LoginComponent },
	{ path: 'home', canActivate: [AuthGuard], component: HomeComponent },
	{ path: 'project', canActivate: [AuthGuard], loadChildren: projectsRoutes },
	{ path: 'public', loadChildren: publicRoutes },
	{
		path: 'error',
		component: ErrorPageComponent,
		data: {
			type: 404,
			title: 'Page Not Found',
			desc: 'Oopps!! The page you were looking for doesn\'t exist.'
		}
	},
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];
