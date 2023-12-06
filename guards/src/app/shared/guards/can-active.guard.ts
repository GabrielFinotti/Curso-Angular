import { CanActivateFn } from '@angular/router';

export const canActiveGuard: CanActivateFn = (route, state) => {
  if (
    route.queryParams['conta'] === 'admin' &&
    route.queryParams['password'] === '1234'
  ) {
    console.log(route);
    console.log(state);
    return true;
  } else {
    console.log(route);
    console.log(state);
    return false;
  }
};
