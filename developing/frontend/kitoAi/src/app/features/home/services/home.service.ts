import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Home} from "../model/home";
import {environment} from "../../../../../environments/environment";
import {Utils} from "../../../shared/utils";
import {UserResponse} from "../../../core/model/user";
import {ServerResponse} from "../../../core/model/serverResponse";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	utils = new Utils()
	prefix = environment.apiUrl

  constructor(private http: HttpClient) { }

	getHomeElements(): Observable<ServerResponse | Array<Home>> {
		return this.http.get<Array<Home>>(`${this.prefix}/api/collections/home/records/`)
			.pipe(
				map((data: Array<Home> | ServerResponse) => {
					if (data.hasOwnProperty('code')) {
						throw new Error((data as ServerResponse).message);
					} else {
						return data as Array<Home>;
					}
				}),
				catchError(this.utils.handleError)
			);
	}

	getHomeElement(id: string): Observable<Home> {
		return this.http.get<Home>(`${this.prefix}/api/collections/home/records/${id}`)
	}
}
