import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	prefix = 'http://localhost:8090'

  constructor(private http: HttpClient) { }

	getHomeElements(): Observable<Array<Home>> {
		return this.http.get<Array<Home>>(`${this.prefix}/api/collections/home/records/`)
	}

	getHomeElement(id: string): Observable<Home> {
		return this.http.get<Home>(`${this.prefix}/api/collections/home/records/${id}`)
	}
}
