import { Routes } from '@angular/router';

import { ShowcaseComponent } from '@pages/dashboard/pages/showcase/showcase.component';
import { ShowcaseRouting } from '@pages/dashboard/pages/showcase/utils/showcase-routing.enum';

export const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: ShowcaseRouting.home,
        data: { breadcrumb: 'Lista' },
        loadChildren: () =>
          import('./pages/home/routing').then((m) => m.routes)
      },
      {
        path: ShowcaseRouting.tableBasic,
        data: { breadcrumb: 'Tabela podstawowa' },
        loadChildren: () =>
          import('./pages/tables/table-basic/routing').then((m) => m.routes)
      },
      {
        path: ShowcaseRouting.tableCollapse,
        data: { breadcrumb: 'Tabela rozwijana' },
        loadChildren: () =>
          import('./pages/tables/table-collapse/routing').then((m) => m.routes)
      },
      {
        path: ShowcaseRouting.tableHttp,
        data: { breadcrumb: 'Tabela z zapytaniem http' },
        loadChildren: () =>
          import('./pages/tables/table-http/routing').then((m) => m.routes)
      },
      {
        path: ShowcaseRouting.buttons,
        data: { breadcrumb: 'Przyciski' },
        loadChildren: () =>
          import('./pages/buttons/routing').then((m) => m.routes)
      },
      {
        path: ShowcaseRouting.downloaders,
        data: { breadcrumb: 'Pobieranie plików' },
        loadChildren: () =>
          import('./pages/downloaders/routing').then((m) => m.routes)
      }
    ]
  }
];
