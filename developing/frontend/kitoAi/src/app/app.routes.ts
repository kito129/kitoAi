import { Routes } from '@angular/router';
import {AuthGuard} from "./core/guard/authGuard";
import {BaseComponent} from "./features/layout/base.component";
import {ErrorPageComponent} from "./features/error/error-page.component";
import {LoginComponent} from "./features/users/components/login.component";

export const routes: Routes = [
	{ path: 'auth/login', component: LoginComponent },
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'home',
				loadChildren: () => import('./features/home/components/home.component').then(m => m.HomeComponent)
			},
			{
				path: 'projects',
				loadChildren: () => import('./features/projects/components/projects.component').then(m => m.ProjectsComponent)
			},
		]
	},
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
