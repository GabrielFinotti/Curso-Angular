import { CanDeactivateFn } from '@angular/router';

// Components
import { AccountComponent } from '../account/account.component';

export const canDesactiveGuard: CanDeactivateFn<AccountComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  console.log(component);
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);
  return component.exit();
};
