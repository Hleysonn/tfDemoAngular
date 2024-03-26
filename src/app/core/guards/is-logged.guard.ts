import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoggedGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('TOKEN')) {
    return true;
  }

  const router = inject(Router);

  router.navigate(['/login']);

  return false;
};
