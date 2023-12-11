import { CanActivateFn } from '@angular/router';

export const canActiveGuard: CanActivateFn = (route, state) => {
  if (
    route.queryParams['conta'] === 'admin' &&
    route.queryParams['password'] === '1234'
  ) {
    return true;
  } else {
    return false;
  }
};
