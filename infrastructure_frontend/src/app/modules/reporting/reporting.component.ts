import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * ReportingComponent
 * PUBLIC_INTERFACE
 * Placeholder for analytics and reports.
 */
@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Reporting</h2>
    <app-card title="Reports">
      <p>Generate operational and financial reports.</p>
    </app-card>
  `
})
export class ReportingComponent {}
