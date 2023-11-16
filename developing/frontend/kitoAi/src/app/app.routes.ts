import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/components/home.component";
import {LoginComponent} from "./features/users/components/login.component";

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '**', component: HomeComponent },
];
