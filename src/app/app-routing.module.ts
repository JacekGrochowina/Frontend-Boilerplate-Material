import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './utils';

const routes: Routes = [
  {
    path: AppRouting.start,
    loadChildren: () =>
      import('./pages/start/routing').then((m) => m.routes),
  },
  {
    path: AppRouting.login,
    loadChildren: () =>
      import('./pages/login/routing').then((m) => m.routes),
  },
  {
    path: AppRouting.register,
    loadChildren: () =>
      import('./pages/register/routing').then((m) => m.routes),
  },
  {
    path: AppRouting.dashboard,
    loadChildren: () =>
      import('./pages/dashboard/routing').then((m) => m.routes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
