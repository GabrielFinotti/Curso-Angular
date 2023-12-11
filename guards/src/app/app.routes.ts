import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';
import { canActiveGuard } from './shared/guards/can-active.guard';
import { canDesactiveGuard } from './shared/guards/can-desactive.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'conta',
    component: AccountComponent,
    canActivate: [canActiveGuard],
    canDeactivate: [canDesactiveGuard],
  },
];
