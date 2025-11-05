import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * ProjectsComponent
 * PUBLIC_INTERFACE
 * Placeholder for projects management.
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Projects</h2>
    <app-card title="Projects List">
      <p>Project creation and management UI will go here.</p>
    </app-card>
  `
})
export class ProjectsComponent {}
