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
    <ng-container *ngIf="user$ | async">
			present
		<pre *ngIf="checkType(user$ | async), else error">
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
	user$: Observable<Pagination<Home> | ServerResponse>;

	constructor(private homeService: HomeService) {	}

	ngOnInit(): void {
		this.user$ = this.homeService.getHomeElements()
	}

	checkType(value: Pagination<Home> | ServerResponse): boolean{
		if(value.hasOwnProperty('code')){
			return false
		}
		else if((value as Pagination<Home>).items !== undefined){
			return true
		} else return null
	}

}
