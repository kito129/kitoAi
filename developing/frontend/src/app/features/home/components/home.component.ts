import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeService} from "../services/home.service";
import {Observable} from "rxjs";
import {Home} from "../model/home";
import {Pagination, ServerResponse} from "../../../core/model/serverResponse";

@Component({
  selector: 'kito-home',
  standalone: true,
  imports: [CommonModule],
  template: `
      <ng-container *ngIf="(homeElements$ | async) , else error">
		<pre>
			{{homeElements$ | async | json}}
		</pre>
      </ng-container>

      <ng-template #error>
          <p>error</p>
      </ng-template>

  `
})
export class HomeComponent implements OnInit{
	homeElements$: Observable<Pagination<Home> | ServerResponse> = null;

	constructor(private homeService: HomeService) {	}

	ngOnInit(): void {
		this.homeElements$ = this.homeService.getHomeElements()
	}
}
