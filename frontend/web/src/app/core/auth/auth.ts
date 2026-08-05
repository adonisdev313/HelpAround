import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthState {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private token = signal<string | null>(null);
  private user = signal<any | null>(null);

  readonly isLoggedIn = computed(() => !!this.token());
  readonly currentUser = this.user.asReadonly();

  constructor() {
    if (this.isBrowser) {
      this.token.set(localStorage.getItem('token'));
      this.user.set(JSON.parse(localStorage.getItem('user') ?? 'null'));
    }
  }

  login(token: string, user: any) {
    if (this.isBrowser) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
    this.token.set(token);
    this.user.set(user);
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    this.token.set(null);
    this.user.set(null);
  }

  getToken() {
    return this.token();
  }
}