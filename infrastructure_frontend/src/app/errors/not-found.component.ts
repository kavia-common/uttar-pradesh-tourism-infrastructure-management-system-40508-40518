import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * NotFoundComponent
 * PUBLIC_INTERFACE
 * Displays a 404 message for unknown routes.
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="err">
      <h1>404</h1>
      <p>We couldn't find that page.</p>
      <a routerLink="/">Go back home</a>
    </div>
  `,
  styles: [`
    .err{ min-height:60vh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; }
    h1{ font-size:64px; margin:0; color:#EF4444 }
    a{ color:#3b82f6; text-decoration:none; }
  `]
})
export class NotFoundComponent {}
