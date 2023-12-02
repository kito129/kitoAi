import {Routes} from "@angular/router";
import {PublicComponent} from "./components/public.component";

export const PUBLIC_ROUTES: Routes = [
	{ path: '', component: PublicComponent},
	{ path: '**', redirectTo: '' }
];
