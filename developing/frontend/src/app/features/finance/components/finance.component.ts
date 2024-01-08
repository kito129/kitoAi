import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {PageComponent} from "../../../shared/components/layout/page.component";
import {CardComponent} from "../../../shared/components/layout/card.component";

@Component({
  selector: 'kito-finance',
  standalone: true,
    imports: [CommonModule, MatToolbarModule, PageComponent, CardComponent],
  template: `
      <div class="flex-wrap">
        <kito-page [title]="'Finance'"
        />
        <div class="row-gap-2">
            <div class="col">
                <kito-card [title]="'Assets'"
                           [subtitle]="'Subtitle'"
                           [content]="'Lorem ipsum dolor ...'"
                           [actions]="['Edit', 'Charts']"
                />
            </div>
            <div class="col">
                <kito-card [title]="'Liabilities'"
                           [subtitle]="'Subtitle'"
                           [content]="'Lorem ipsum dolor ...'"
                           [actions]="['Edit', 'Charts']"
                />
            </div>
            <div class="col">
                <kito-card [title]="'Equity'"
                           [subtitle]="'Subtitle'"
                           [content]="'Lorem ipsum dolor ...'"
                           [actions]="['Edit', 'Charts']"
                />
            </div>
        </div>
      </div>


  `,
  styles: ``
})
export class FinanceComponent {

}
