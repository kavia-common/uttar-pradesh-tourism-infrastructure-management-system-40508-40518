import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

/**
 * SidebarComponent
 * PUBLIC_INTERFACE
 * Collapsible sidebar with navigation links to modules.
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass],
  template: `
    <aside class="sidebar" [ngClass]="{collapsed: collapsed}">
      <ul>
        <li><a routerLink="/dashboard" routerLinkActive="active" [title]="collapsed ? 'Dashboard' : ''">🏠 <span *ngIf="!collapsed">Dashboard</span></a></li>
        <li><a routerLink="/users" routerLinkActive="active" [title]="collapsed ? 'Users' : ''">👤 <span *ngIf="!collapsed">Users</span></a></li>
        <li><a routerLink="/projects" routerLinkActive="active" [title]="collapsed ? 'Projects' : ''">📁 <span *ngIf="!collapsed">Projects</span></a></li>
        <li><a routerLink="/tenders" routerLinkActive="active" [title]="collapsed ? 'Tenders & Contractors' : ''">📑 <span *ngIf="!collapsed">Tenders/Contractors</span></a></li>
        <li><a routerLink="/funds" routerLinkActive="active" [title]="collapsed ? 'Funds' : ''">💰 <span *ngIf="!collapsed">Funds/Milestones</span></a></li>
        <li><a routerLink="/progress" routerLinkActive="active" [title]="collapsed ? 'Progress (Maps)' : ''">🗺️ <span *ngIf="!collapsed">Progress (Maps)</span></a></li>
        <li><a routerLink="/inspections" routerLinkActive="active" [title]="collapsed ? 'Inspections' : ''">🔍 <span *ngIf="!collapsed">Inspections/Handover</span></a></li>
        <li><a routerLink="/payments" routerLinkActive="active" [title]="collapsed ? 'Payments' : ''">💳 <span *ngIf="!collapsed">Payments</span></a></li>
        <li><a routerLink="/reporting" routerLinkActive="active" [title]="collapsed ? 'Reporting' : ''">📊 <span *ngIf="!collapsed">Reporting</span></a></li>
        <li><a routerLink="/training" routerLinkActive="active" [title]="collapsed ? 'Training & Support' : ''">🎓 <span *ngIf="!collapsed">Training/Support</span></a></li>
      </ul>
    </aside>
  `,
  styles: [`
    .sidebar{
      width: 240px;
      background: #0f172a;
      color: #e5e7eb;
      transition: width .2s ease;
      overflow: hidden;
      padding-top: 8px;
    }
    .sidebar.collapsed{ width: 64px; }
    ul{list-style:none; margin:0; padding:8px 0;}
    a{
      color:#e5e7eb;
      display:flex; align-items:center; gap:10px;
      padding:10px 12px;
      text-decoration:none;
      border-left: 3px solid transparent;
    }
    a.active{
      background: rgba(59,130,246,0.15);
      border-left-color: #3b82f6;
    }
    a:hover{ background: rgba(255,255,255,0.06); }
  `]
})
export class SidebarComponent {
  // PUBLIC_INTERFACE
  @Input() collapsed = false;
}
