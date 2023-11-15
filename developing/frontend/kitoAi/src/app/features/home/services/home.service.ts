import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

	getHomeElements(): Observable<Array<Home>> {
		return this.http.get<Array<Home>>(`/api/collections/home/records}`);
	}

	getHomeElement(id: string): Observable<Home> {
		return this.http.get<Home>(`/api/collections/home/records/${id}`);
	}
}
