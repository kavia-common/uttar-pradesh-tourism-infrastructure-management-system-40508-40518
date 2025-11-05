import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card.component';

/**
 * UsersComponent
 * PUBLIC_INTERFACE
 * Placeholder for user management screens.
 */
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Users</h2>
    <app-card title="Manage Users">
      <p>CRUD operations for users will be implemented here.</p>
    </app-card>
  `
})
export class UsersComponent {}
