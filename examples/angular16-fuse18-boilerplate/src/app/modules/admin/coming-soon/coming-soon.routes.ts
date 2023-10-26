import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/modules/admin/dashboard/dashboard.component';
import {ComingSoonModernComponent} from "./coming-soon.component";

export default [
    {
        path     : '',
        component: ComingSoonModernComponent,
    },
] as Routes;
