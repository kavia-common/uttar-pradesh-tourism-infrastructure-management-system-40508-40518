import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * FundsComponent
 * PUBLIC_INTERFACE
 * Placeholder for fund releases and milestone tracking.
 */
@Component({
  selector: 'app-funds',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Funds & Milestones</h2>
    <app-card title="Funds">
      <p>Fund allocation and disbursal workflow.</p>
    </app-card>
    <app-card title="Milestones">
      <p>Milestone definitions and status tracking.</p>
    </app-card>
  `
})
export class FundsComponent {}
