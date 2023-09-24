import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './utils';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { environment } from '../../../environments/environment';

const routes: Routes = [
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
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: DashboardRouting.settings,
        loadChildren: () =>
          import('./pages/settings/settings.module').then((m) => m.SettingsModule),
      },
      /*
        The following route is hidden in a production environment as it contains
        only example implementations of reusable components.
        Please enable it for development and testing purposes.
       */
      ...(environment.production ? [] : [
        {
          path: DashboardRouting.showcase,
          loadChildren: () =>
            import('./pages/showcase/showcase.module').then((m) => m.ShowcaseModule),
        },
      ]),
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
