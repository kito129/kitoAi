import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'kito-card',
  standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                {{title}}
            </mat-card-title>
            <mat-card-subtitle>
                {{subtitle}}
            </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
            <p>
            {{content}}
            </p>
        </mat-card-content>
        <mat-card-actions>
            <button *ngFor="let action of actions, index as i" mat-button>{{action}}</button>
        </mat-card-actions>
    </mat-card>
  `,
  styles: ``
})
export class CardComponent {

    @Input() title: string;
    @Input() subtitle: string;
    @Input() content: string;
    @Input() actions: string[];
}

export interface CardActions{
    name: string
    icon: string
}
