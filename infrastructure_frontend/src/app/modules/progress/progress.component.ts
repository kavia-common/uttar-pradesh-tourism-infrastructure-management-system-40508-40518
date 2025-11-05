import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * ProgressComponent
 * PUBLIC_INTERFACE
 * Placeholder for geo-tagged progress map view.
 */
@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Progress (Maps)</h2>
    <app-card title="Map Visualization">
      <p>Interactive map and geo-tagged updates will be rendered here.</p>
    </app-card>
  `
})
export class ProgressComponent {}
