import { Injectable } from '@angular/core';
import {Utils} from "../../../shared/utils";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FinanceAsset} from "../model/finance.model";
import {Pagination} from "../../../core/model/serverResponse";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

    utils = new Utils()
    prefix = environment.apiUrl
    expandField = "?expand=type,currency"

    constructor(private http: HttpClient) { }

    getFinanceElements(): Observable<Pagination<FinanceAsset>> {
        return this.http.get<Pagination<FinanceAsset>>(`${this.prefix}/api/collections/finance_assets/records${this.expandField}`)
    }

}
