import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * ForbiddenComponent
 * PUBLIC_INTERFACE
 * Displays a 403 message for unauthorized access attempts.
 */
@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="err">
      <h1>403</h1>
      <p>You don't have permission to view this page.</p>
      <a routerLink="/">Go back home</a>
    </div>
  `,
  styles: [`
    .err{ min-height:60vh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; }
    h1{ font-size:64px; margin:0; color:#F59E0B }
    a{ color:#3b82f6; text-decoration:none; }
  `]
})
export class ForbiddenComponent {}
