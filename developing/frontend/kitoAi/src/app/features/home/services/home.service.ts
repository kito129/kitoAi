import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Home} from "../model/home";
import {environment} from "../../../../../environments/environment";
import {Utils} from "../../../shared/utils";
import {UserResponse} from "../../../core/model/user";
import {Pagination, ServerResponse} from "../../../core/model/serverResponse";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	utils = new Utils()
	prefix = environment.apiUrl

  constructor(private http: HttpClient) { }

	getHomeElements(): Observable<ServerResponse | Pagination<Home>> {
		return this.http.get<ServerResponse |Pagination<Home>>(`${this.prefix}/api/collections/home/records`)
			.pipe(
				map((data: Pagination<Home> | ServerResponse) => {
					if (data.hasOwnProperty('code')) {
						return data as ServerResponse
					} else {
						return data as Pagination<Home>
					}
				})
			);
	}

	getHomeElement(id: string): Observable<Home> {
		return this.http.get<Home>(`${this.prefix}/api/collections/home/records/${id}`)
	}
}
