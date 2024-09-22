import { IShowcaseTreeNode } from '@pages/dashboard/pages/showcase/utils/showcase-tree-node.interface';
import { ShowcaseRouting } from '@pages/dashboard/pages/showcase/utils/showcase-routing.enum';

export const SHOWCASE_TREE_DATA: IShowcaseTreeNode[] = [
  {
    displayName: 'Główne komponenty',
    children: [
      {
        displayName: 'Tabele',
        children: [
          {
            displayName: 'Tabela - podstawowa',
            link: ShowcaseRouting.tableBasic
          },
          {
            displayName: 'Tabela - rozwijane wiersze',
            link: ShowcaseRouting.tableCollapse
          },
          {
            displayName: 'Tabela - zapytania http + paginacja',
            link: ShowcaseRouting.tableHttp
          }
        ]
      },
      {
        displayName: 'Przyciski',
        link: ShowcaseRouting.buttons
      },
      {
        displayName: 'Pobieranie plików',
        link: ShowcaseRouting.downloaders
      }
    ]
  }
];
