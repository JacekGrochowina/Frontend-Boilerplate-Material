import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { DashboardRouting } from "./utils/dashboard-routing.enum";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: DashboardRouting.home,
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
