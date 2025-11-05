import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './errors/forbidden.component';
import { NotFoundComponent } from './errors/not-found.component';
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'auth/login', component: LoginComponent, title: 'Login' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard], title: 'Dashboard' },
  {
    path: 'users',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/users/users.routes').then(m => m.USERS_ROUTES)
  },
  {
    path: 'projects',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/projects/projects.routes').then(m => m.PROJECTS_ROUTES)
  },
  {
    path: 'tenders',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/tenders/tenders.routes').then(m => m.TENDERS_ROUTES)
  },
  {
    path: 'funds',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/funds/funds.routes').then(m => m.FUNDS_ROUTES)
  },
  {
    path: 'progress',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/progress/progress.routes').then(m => m.PROGRESS_ROUTES)
  },
  {
    path: 'inspections',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/inspections/inspections.routes').then(m => m.INSPECTIONS_ROUTES)
  },
  {
    path: 'payments',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/payments/payments.routes').then(m => m.PAYMENTS_ROUTES)
  },
  {
    path: 'reporting',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/reporting/reporting.routes').then(m => m.REPORTING_ROUTES)
  },
  {
    path: 'training',
    // Training should be public for help access
    loadChildren: () => import('./modules/training/training.routes').then(m => m.TRAINING_ROUTES)
  },
  { path: '403', component: ForbiddenComponent, title: 'Forbidden' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' }
];
