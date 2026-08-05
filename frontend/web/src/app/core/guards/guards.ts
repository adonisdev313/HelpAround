import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthState } from '../auth/auth'
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthState);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if(!isPlatformBrowser(platformId)) {
    return true;
  }

  if(auth.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
}
