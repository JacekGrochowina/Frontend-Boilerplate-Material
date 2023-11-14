import { Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';
import { ShowcaseRouting } from './utils/showcase-routing.enum';

export const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: ShowcaseRouting.home,
        loadChildren: () =>
          import('./pages/home/routing').then((m) => m.routes),
      },
      {
        path: ShowcaseRouting.tableBasic,
        loadChildren: () =>
          import('./pages/tables/table-basic/routing').then((m) => m.routes),
      },
      {
        path: ShowcaseRouting.tableCollapse,
        loadChildren: () =>
          import('./pages/tables/table-collapse/routing').then((m) => m.routes),
      },
      {
        path: ShowcaseRouting.buttons,
        loadChildren: () =>
          import('./pages/buttons/routing').then((m) => m.routes),
      },
      {
        path: ShowcaseRouting.downloaders,
        loadChildren: () =>
          import('./pages/downloaders/routing').then((m) => m.routes),
      }
    ]
  }
];
