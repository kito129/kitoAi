import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Home} from "../model/home.model";
import {environment} from "../../../../../environments/environment";
import {Utils} from "../../../shared/utils";
import {UserResponse} from "../../users/model/user";
import {Pagination, ServerResponse} from "../../../core/model/serverResponse";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	utils = new Utils()
	prefix = environment.apiUrl

  constructor(private http: HttpClient) { }

	getHomeElements(): Observable<Pagination<Home>> {
        return this.http.get<Pagination<Home>>(`${this.prefix}/api/collections/home/records`)
	}

	getHomeElement(id: string): Observable<Home> {
		return this.http.get<Home>(`${this.prefix}/api/collections/home/records/${id}`)
	}
}
