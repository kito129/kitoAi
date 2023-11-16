import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	prefix = environment.apiUrl

  constructor(private http: HttpClient) { }

	getHomeElements(): Observable<Array<Home>> {
		return this.http.get<Array<Home>>(`${this.prefix}/api/collections/home/records/`)
	}

	getHomeElement(id: string): Observable<Home> {
		return this.http.get<Home>(`${this.prefix}/api/collections/home/records/${id}`)
	}
}
