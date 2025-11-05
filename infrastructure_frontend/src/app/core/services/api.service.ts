import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

/**
 * ApiService
 * PUBLIC_INTERFACE
 * Thin wrapper over HttpClient to use configured API base URL consistently.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl.replace(/\/+$/, '');

  // PUBLIC_INTERFACE
  get<T>(path: string, params?: Record<string, any>): Observable<T> {
    const url = `${this.base}/${path.replace(/^\/+/, '')}`;
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null) httpParams = httpParams.set(k, String(v));
      });
    }
    return this.http.get<T>(url, { params: httpParams });
  }

  // PUBLIC_INTERFACE
  post<T>(path: string, body: any): Observable<T> {
    const url = `${this.base}/${path.replace(/^\/+/, '')}`;
    return this.http.post<T>(url, body);
  }

  // PUBLIC_INTERFACE
  put<T>(path: string, body: any): Observable<T> {
    const url = `${this.base}/${path.replace(/^\/+/, '')}`;
    return this.http.put<T>(url, body);
  }

  // PUBLIC_INTERFACE
  delete<T>(path: string): Observable<T> {
    const url = `${this.base}/${path.replace(/^\/+/, '')}`;
    return this.http.delete<T>(url);
  }
}
