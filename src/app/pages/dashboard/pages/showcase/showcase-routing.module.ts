import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';
import { ShowcaseRouting } from './utils/showcase-routing.enum';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: ShowcaseRouting.home,
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: ShowcaseRouting.tableBasic,
        loadChildren: () =>
          import('./pages/tables/table-basic/table-basic.module').then((m) => m.TableBasicModule),
      },
      {
        path: ShowcaseRouting.tableCollapse,
        loadChildren: () =>
          import('./pages/tables/table-collapse/table-collapse.module').then((m) => m.TableCollapseModule),
      },
      {
        path: ShowcaseRouting.buttons,
        loadChildren: () =>
          import('./pages/buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: ShowcaseRouting.downloaders,
        loadChildren: () =>
          import('./pages/downloaders/downloaders.module').then((m) => m.DownloadersModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule {}
