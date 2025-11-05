import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { TopNavComponent } from './top-nav.component';
import { SidebarComponent } from './sidebar.component';

/**
 * LayoutComponent
 * PUBLIC_INTERFACE
 * Hosts the global application shell:
 * - Top navigation bar
 * - Collapsible sidebar
 * - Main content area with <router-outlet>
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, SidebarComponent, NgClass],
  template: `
    <div class="app-container" [class.sidebar-collapsed]="collapsed()">
      <app-top-nav (toggleSidebar)="toggleSidebar()"></app-top-nav>
      <div class="body">
        <app-sidebar [collapsed]="collapsed()"></app-sidebar>
        <main class="content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  collapsed = signal(false);

  // PUBLIC_INTERFACE
  toggleSidebar() {
    /** Toggle sidebar collapsed state */
    this.collapsed.update(v => !v);
  }
}
