import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
* DashboardComponent
* PUBLIC_INTERFACE
* Simple landing dashboard with placeholder cards.
*/
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Dashboard</h2>
    <app-card title="Projects Overview">
      <p>Quick stats and insights will appear here.</p>
    </app-card>
    <app-card title="Recent Activities">
      <p>Recent updates and audit logs.</p>
    </app-card>
  `
})
export class DashboardComponent {}
