import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

/**
 * LoginComponent
 * PUBLIC_INTERFACE
 * Provides a login form to authenticate the user.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  template: `
    <div class="login-wrapper">
      <form class="login-card" (ngSubmit)="onSubmit()">
        <h2>Welcome to UPSTDC</h2>
        <p class="subtitle">Sign in to continue</p>

        <label>
          Username
          <input name="username" [(ngModel)]="username" required autocomplete="username" />
        </label>
        <label>
          Password
          <input name="password" [(ngModel)]="password" type="password" required autocomplete="current-password" />
        </label>

        <button type="submit" [disabled]="loading">{{ loading ? 'Signing in...' : 'Sign In' }}</button>

        <p class="help">Need access? <a routerLink="/training">Training & Support</a></p>
      </form>
    </div>
  `,
  styles: [`
    .login-wrapper{
      min-height:100vh;
      display:flex; align-items:center; justify-content:center;
      background: linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.10));
      padding:16px;
    }
    .login-card{
      width:100%; max-width:380px;
      background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:24px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.06);
      display:flex; flex-direction:column; gap:12px;
    }
    h2{ margin:0 0 4px; color:#111827 }
    .subtitle{ color:#6b7280; margin-bottom:8px }
    label{ display:flex; flex-direction:column; gap:6px; color:#374151; font-size:14px }
    input{
      padding:10px 12px; border:1px solid #e5e7eb; border-radius:8px; outline:none;
    }
    input:focus{ border-color:#3b82f6; box-shadow:0 0 0 3px rgba(59,130,246,0.15) }
    button{
      margin-top:8px;
      background: linear-gradient(90deg,#3b82f6,#06b6d4);
      color:#fff; border:none; padding:10px 12px; border-radius:8px; cursor:pointer;
      font-weight:600;
    }
    button[disabled]{ opacity:0.7; cursor:not-allowed }
    .help{ color:#6b7280; font-size:12px; text-align:center; margin-top:8px }
    .help a{ color:#3b82f6; text-decoration:none }
  `]
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';
  loading = false;

  // PUBLIC_INTERFACE
  onSubmit() {
    if (!this.username || !this.password) return;
    this.loading = true;
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.loading = false;
        console.error('Login failed. Please check your credentials.');
      }
    });
  }
}
