import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

/**
 * roleGuard
 * PUBLIC_INTERFACE
 * Checks for basic role requirement in route data. Placeholder: Always allows if authenticated.
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.hasToken()) {
    router.navigate(['/auth/login']);
    return false;
  }
  // TODO: Implement actual role evaluation using token claims.
  return true;
};
