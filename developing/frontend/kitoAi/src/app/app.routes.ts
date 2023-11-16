import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/components/home.component";
import {LoginComponent} from "./features/users/components/login.component";
import {AuthGuard} from "./core/authGuard";
import {ProjectsComponent} from "./features/projects/components/projects.component";

export const routes: Routes = [
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
	{ path: 'auth/login', component: LoginComponent },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];
