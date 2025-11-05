import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * TopNavComponent
 * PUBLIC_INTERFACE
 * Renders the top navigation bar with app title and a sidebar toggle.
 */
@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topnav">
      <button class="icon-btn" aria-label="Toggle sidebar" (click)="toggleSidebar.emit()">
        ☰
      </button>
      <a class="brand" routerLink="/">UPSTDC Infrastructure</a>
      <nav class="spacer"></nav>
      <a routerLink="/auth/login" class="login-link">Login</a>
    </header>
  `,
  styles: [`
    .topnav{
      height:56px;
      background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
      color:#fff;
      display:flex;
      align-items:center;
      padding:0 12px;
      position: sticky; top:0; z-index: 5;
    }
    .icon-btn{
      background: transparent;
      border: none;
      color:#fff;
      font-size:20px;
      margin-right:8px;
      cursor:pointer;
    }
    .brand{
      font-weight:600;
      color:#fff;
      text-decoration:none;
    }
    .spacer{flex:1}
    .login-link{
      color:#fff;
      text-decoration:none;
      font-weight:500;
    }
  `]
})
export class TopNavComponent {
  // PUBLIC_INTERFACE
  @Output() toggleSidebar = new EventEmitter<void>();
}
