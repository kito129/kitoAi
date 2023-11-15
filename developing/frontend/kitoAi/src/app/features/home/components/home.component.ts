import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeService} from "../services/home.service";
import {Observable} from "rxjs";

class User {
}

@Component({
  selector: 'kito-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      home works!
    </p>

	<code>
		{{user$ | async | json}}
	</code>
  `,
  styles: ``
})
export class HomeComponent implements OnInit{

	@Input() userId!: string;
	user$!: Observable<User>;

	constructor(private homeService: HomeService) {	}

	ngOnInit(): void {
		this.user$ = this.homeService.getHomeElements();
	}

}
