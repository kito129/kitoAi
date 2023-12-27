import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'kito-error-page',
  standalone: true,
	imports: [CommonModule, RouterLink],
  template: `
	  <div class="main-wrapper">
		  <div class="page-wrapper full-page">
			  <div class="page-content d-flex align-items-center justify-content-center">

				  <div class="row w-100 mx-0 auth-page">
					  <div class="col-md-8 col-xl-6 mx-auto d-flex flex-column align-items-center">
						  <!--<img src="../../../assets/images/404.svg" class="img-fluid mb-2" alt="404">-->
						  <h1 class="font-weight-bold mb-22 mt-2 tx-80 text-muted">{{type}}</h1>
						  <h4 class="mb-2">{{title}}</h4>
						  <h6 class="text-muted mb-3 text-center" [innerHTML]="desc"></h6>
						  <a routerLink="" class="btn btn-primary">Back to home</a>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>

  `,
  styles: ``
})
export class ErrorPageComponent {

	type: any;
	title: any;
	desc: any;
	private sub: Subscription;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.type = this.route.snapshot.paramMap.get('type');
		console.log('hii');
		console.log(this.type);

		switch(this.type) {
			case '404':
				if (!this.title) {
					this.title = 'Page Not Found'
				}
				if (!this.desc) {
					this.desc = 'Oopps!! The page you were looking for doesn\'t exist.'
				}
				break;
			case '500':
				if (!this.title) {
					this.title = 'Internal server error'
				}
				if (!this.desc) {
					this.desc = 'Oopps!! There wan an error. Please try agin later.'
				}
				break;
			default:
				// if (!this.type) {
				this.type = 'Ooops..';
				// }
				if (!this.title) {
					this.title = 'Something went wrong';
				}
				if (!this.desc) {
					this.desc = 'Looks like something went wrong.<br>' + 'We\'re working on it';
				}
		}
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}


}
