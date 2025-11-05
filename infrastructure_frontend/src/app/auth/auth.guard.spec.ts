import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('authGuard', () => {
  let router: MockRouter;
  let auth: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useClass: MockRouter },
        AuthService
      ]
    });
    router = TestBed.inject(Router) as unknown as MockRouter;
    auth = TestBed.inject(AuthService);
    (globalThis as any).localStorage = {
      store: {} as Record<string, string>,
      getItem(key: string) { return this.store[key] ?? null; },
      setItem(key: string, value: string) { this.store[key] = value; },
      removeItem(key: string) { delete this.store[key]; },
      clear() { this.store = {}; }
    };
    (globalThis as any).window = { localStorage: (globalThis as any).localStorage };
    (globalThis as any).localStorage.clear();
  });

  it('should block navigation without token', () => {
    spyOn(auth, 'hasToken').and.returnValue(false);
    const allowed = authGuard();
    expect(allowed).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should allow navigation with token', () => {
    spyOn(auth, 'hasToken').and.returnValue(true);
    const allowed = authGuard();
    expect(allowed).toBeTrue();
  });
});
