import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'sobre',
    component: SobreComponent,
    children: [{ path: 'gabriel', component: SobreComponent }],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
