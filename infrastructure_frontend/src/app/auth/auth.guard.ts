import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

/**
 * authGuard
 * PUBLIC_INTERFACE
 * Ensures the user is authenticated, otherwise redirects to login.
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.hasToken()) {
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
