import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * PaymentsComponent
 * PUBLIC_INTERFACE
 * Placeholder for payment processing and tracking.
 */
@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Payments</h2>
    <app-card title="Payment Requests">
      <p>Invoice submission and approval tracking.</p>
    </app-card>
  `
})
export class PaymentsComponent {}
