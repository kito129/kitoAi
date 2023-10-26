import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'dashboard',
    standalone   : true,
    templateUrl  : './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent
{
    /**
     * Constructor
     */
    constructor()
    {}
}
