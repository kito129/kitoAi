import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {FinanceAsset} from "../../features/finance/model/finance.model";
import {HttpClient} from "@angular/common/http";
import {merge, startWith, switchMap} from "rxjs";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'kito-simple-table',
  standalone: true,
    imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule],
  template: `

      <div class="container-fluid">
          <mat-form-field>
              <mat-label>Filter</mat-label>
              <input matInput
                     (keyup)="applyFilter(filterInput)"
                     #filterInput
                     placeholder="Filter">
          </mat-form-field>

          <div class="mat-elevation-z8">
              <table mat-table [dataSource]="dataSource" matSort>

                  <!-- ID Column -->
                  <ng-container matColumnDef="name">
                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
                      <td mat-cell *matCellDef="let row"> {{row.name}} </td>
                  </ng-container>

                  <!-- Row shown when there is no matching data. -->
                  <tr class="mat-row" *matNoDataRow>
                      <td class="mat-cell" colspan="4">No data matching the filter "{{filterInput.value}}"</td>
                  </tr>

                  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

              </table>

          </div>
      </div>
  `,
  styles: ``
})
export class SimpleTableComponent implements AfterViewInit{

    @Input() data: FinanceAsset[]

    @ViewChild('filterInput') myInput: ElementRef<HTMLInputElement> | undefined

    displayedColumns: string[] = ['name'];
    dataSource: MatTableDataSource<FinanceAsset>;

    constructor() {
        if (this.data) {
            this.dataSource = new MatTableDataSource(this.data);
        }
    }

    ngAfterViewInit() {}

    applyFilter(input: HTMLInputElement) {
        const filterValue = input.value;
        console.log(input)
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
