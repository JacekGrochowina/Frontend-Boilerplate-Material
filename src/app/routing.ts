import { Routes } from '@angular/router';

import { AppRouting } from '@app/utils';
import { AuthGuard, LoginGuard } from '@shared/utils/guards';

export const routes: Routes = [
  {
    path: AppRouting.start,
    loadChildren: () =>
      import('./pages/start/routing').then((m) => m.routes)
  },
  {
    path: AppRouting.login,
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./pages/login/routing').then((m) => m.routes)
  },
  {
    path: AppRouting.register,
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./pages/register/routing').then((m) => m.routes)
  },
  {
    path: AppRouting.dashboard,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/dashboard/routing').then((m) => m.routes)
  }
];
