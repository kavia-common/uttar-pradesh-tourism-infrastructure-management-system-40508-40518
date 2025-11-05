import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * TrainingComponent
 * PUBLIC_INTERFACE
 * Placeholder for training and support resources.
 */
@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Training & Support</h2>
    <app-card title="Resources">
      <p>Help docs, tutorials, and support channels.</p>
    </app-card>
  `
})
export class TrainingComponent {}
