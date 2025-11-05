import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * TendersComponent
 * PUBLIC_INTERFACE
 * Placeholder for tenders and contractors management.
 */
@Component({
  selector: 'app-tenders',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Tenders & Contractors</h2>
    <app-card title="Tenders">
      <p>Tender creation, bidding and contractor assignment.</p>
    </app-card>
  `
})
export class TendersComponent {}
