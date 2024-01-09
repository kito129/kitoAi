import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {PageComponent} from "../../../shared/components/layout/page.component";
import {CardComponent} from "../../../shared/components/layout/card.component";
import {FinanceAsset} from "../model/finance.model";
import {FinanceService} from "../services/finance.service";
import {Observable} from "rxjs";
import {Pagination} from "../../../core/model/serverResponse";
import {SimpleTableComponent} from "../../../shared/tables/simple-table.component";

@Component({
  selector: 'kito-finance',
  standalone: true,
    imports: [CommonModule, MatToolbarModule, PageComponent, CardComponent, SimpleTableComponent],
  template: `
      <div class="container-fluid" *ngIf="(financeAssets$ | async)?.items.length">
          <kito-page [title]="'Finance'" [subtitle]="'test'"/>

          <ul>
              <li *ngFor="let asset of (financeAssets$ | async)?.items">
                  {{asset.name}}  {{asset.expand.currency.name}}  {{asset.expand.type.type}}
              </li>
          </ul>

         <kito-simple-table [data]="(financeAssets$ | async)?.items"></kito-simple-table>

      </div>
  `,
  styles: ``
})
export class FinanceComponent implements OnInit{

    financeAssets$: Observable<Pagination<FinanceAsset>>

    constructor(private financeService: FinanceService) {}

   ngOnInit(): void {
        this.financeAssets$ = this.financeService.getFinanceElements()
   }

}
