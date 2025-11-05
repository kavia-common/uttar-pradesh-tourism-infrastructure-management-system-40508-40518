import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideHttpClient()
      ]
    });
    service = TestBed.inject(AuthService);
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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and read token', () => {
    expect(service.hasToken()).toBeFalse();
    (globalThis as any).localStorage.setItem('upstdc_jwt', 'abc');
    expect(service.hasToken()).toBeTrue();
    expect(service.getToken()).toBe('abc');
  });
});
