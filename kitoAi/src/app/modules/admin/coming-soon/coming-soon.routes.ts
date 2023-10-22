import { Routes } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {ComingSoonModernComponent} from "./coming-soon.component";

export default [
    {
        path     : '',
        component: ComingSoonModernComponent,
    },
] as Routes;
