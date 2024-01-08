import { Routes } from '@angular/router';
import {AuthGuard} from "./core/guard/authGuard";
import {ErrorPageComponent} from "./features/error/error-page.component";
import {HomeComponent} from "./features/home/components/home.component";
import {DashboardComponent} from "./features/home/components/dashboard.component";
import {ProjectsComponent} from "./features/projects/components/projects.component";
import {PublicComponent} from "./features/public/components/public.component";
import {FinanceComponent} from "./features/finance/components/finance.component";


export const APP_ROUTES: Routes = [
	// AUTH routes
	//{ path: 'auth/login', component: LoginComponent },
	// PUBLIC routes
	{ path: 'public', component: PublicComponent},
	// ADMIN routes
	{ path: 'home', canActivate: [AuthGuard], component: HomeComponent},
    { path: 'home/dashboard', canActivate: [AuthGuard], component: DashboardComponent},
	{ path: 'projects', canActivate: [AuthGuard], component: ProjectsComponent},
    { path: 'finance', component: FinanceComponent},
	// UTIL routes
	{
		path: 'error',
		component: ErrorPageComponent,
		data: {
			type: 404,
			title: 'Page Not Found',
			desc: 'Oopps!! The page you were looking for doesn\'t exist.'
		}
	},
	{ path: '**', redirectTo: 'public', pathMatch: 'full' }
];
