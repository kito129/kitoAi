import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeService} from "../services/home.service";
import {Observable} from "rxjs";
import {Home} from "../model/home";
import {Pagination, ServerResponse} from "../../../core/model/serverResponse";

class User {
}

@Component({
  selector: 'kito-home',
  standalone: true,
  imports: [CommonModule],
  template: `
	  first
    <ng-container *ngIf="(user$ | async) , else error">
		<pre>
			{{user$ | async | json}}
		</pre>
	</ng-container>

	<ng-template #error>
		<p>error</p>
	</ng-template>

  `,
  styles: ``
})
export class HomeComponent implements OnInit{

	@Input() userId!: string;
	user$: Observable<Pagination<Home> | ServerResponse> = null;

	constructor(private homeService: HomeService) {	}

	ngOnInit(): void {
		this.user$ = this.homeService.getHomeElements()
	}

}
