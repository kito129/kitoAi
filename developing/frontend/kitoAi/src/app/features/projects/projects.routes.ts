import {Routes} from "@angular/router";
import {ProjectsComponent} from "./components/projects.component";
import {AuthGuard} from "../../core/guard/authGuard";

export const PROJECTS_ROUTES: Routes = [
	{ path: '', component: ProjectsComponent, canActivate: [AuthGuard] },
	{ path: 'private', component: ProjectsComponent , canActivate: [AuthGuard] },
	{ path: 'public', component: ProjectsComponent , canActivate: [AuthGuard]},
	// otherwise redirect to home
	{ path: '**', redirectTo: '' }
];
