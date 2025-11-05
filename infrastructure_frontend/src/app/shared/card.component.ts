import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * CardComponent
 * PUBLIC_INTERFACE
 * Simple styled card wrapper for consistent module stub UIs.
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <header *ngIf="title" class="card-header">{{ title }}</header>
      <div class="card-body"><ng-content/></div>
    </section>
  `,
  styles: [`
    .card{
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:8px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
      margin-bottom:16px;
    }
    .card-header{
      padding:12px 16px;
      font-weight:600;
      border-bottom:1px solid #e5e7eb;
    }
    .card-body{ padding:16px; }
  `]
})
export class CardComponent {
  // PUBLIC_INTERFACE
  @Input() title?: string;
}
