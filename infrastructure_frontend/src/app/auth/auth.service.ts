import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * AuthService
 * PUBLIC_INTERFACE
 * Handles login/logout and token storage.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'upstdc_jwt';
  private platformId = inject(PLATFORM_ID);
  isAuthenticatedSig = signal<boolean>(this.safeHasToken());

  constructor(private api: ApiService, private router: Router) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // PUBLIC_INTERFACE
  login(username: string, password: string): Observable<{ token: string }> {
    // Replace 'auth/login' path to match backend
    return this.api.post<{ token: string }>('auth/login', { username, password }).pipe(
      tap((res) => {
        if (res?.token && this.isBrowser()) {
          window.localStorage.setItem(this.tokenKey, res.token);
          this.isAuthenticatedSig.set(true);
        }
      })
    );
  }

  // PUBLIC_INTERFACE
  logout(): void {
    if (this.isBrowser()) {
      window.localStorage.removeItem(this.tokenKey);
    }
    this.isAuthenticatedSig.set(false);
    this.router.navigate(['/auth/login']);
  }

  // PUBLIC_INTERFACE
  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return window.localStorage.getItem(this.tokenKey);
  }

  private safeHasToken(): boolean {
    return this.isBrowser() && !!window.localStorage.getItem(this.tokenKey);
  }

  // PUBLIC_INTERFACE
  hasToken(): boolean {
    return this.safeHasToken();
  }
}
