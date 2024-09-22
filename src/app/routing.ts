import { Routes } from '@angular/router';

import { AppRouting } from '@app/utils';
import { AuthGuard, LoginGuard } from '@shared/utils/guards';

export const routes: Routes = [
  {
    path: AppRouting.start,
    data: { breadcrumb: 'Strona powitalna' },
    loadChildren: () =>
      import('./pages/start/routing').then((m) => m.routes)
  },
  {
    path: AppRouting.login,
    data: { breadcrumb: 'Logowanie' },
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./pages/login/routing').then((m) => m.routes)
  },
  {
    path: AppRouting.register,
    data: { breadcrumb: 'Rejestracja' },
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./pages/register/routing').then((m) => m.routes)
  },
  {
    path: AppRouting.dashboard,
    data: { breadcrumb: 'Panel główny' },
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/dashboard/routing').then((m) => m.routes)
  }
];
