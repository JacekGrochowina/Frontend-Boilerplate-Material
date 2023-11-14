import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './utils';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { environment } from '../../../environments/environment';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: DashboardRouting.home,
        pathMatch: 'full',
      },
      {
        path: DashboardRouting.home,
        loadChildren: () =>
          import('./pages/home/routing').then((m) => m.routes),
      },
      {
        path: DashboardRouting.settings,
        loadChildren: () =>
          import('./pages/settings/routing').then((m) => m.routes),
      },
      /*
        The following route is hidden in a production environment as it contains
        only example implementations of reusable components and services.
        Please enable it for development and testing purposes.
      */
      ...(environment.production ? [] : [
        {
          path: DashboardRouting.showcase,
          loadChildren: () =>
            import('./pages/showcase/routing').then((m) => m.routes),
        },
      ]),
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  }
];
