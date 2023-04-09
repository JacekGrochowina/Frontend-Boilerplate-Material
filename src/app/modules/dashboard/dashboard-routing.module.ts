import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { DashboardRouting } from "./utils";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";

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
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: DashboardRouting.settings,
        loadChildren: () =>
          import('./modules/settings/settings.module').then((m) => m.SettingsModule),
      },
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
