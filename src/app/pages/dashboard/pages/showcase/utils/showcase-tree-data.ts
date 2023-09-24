import { ShowcaseTreeNode } from './showcase-tree-node.interface';
import { ShowcaseRouting } from './showcase-routing.enum';

export const SHOWCASE_TREE_DATA: ShowcaseTreeNode[] = [
  {
    displayName: 'Główne komponenty',
    children: [
      {
        displayName: 'Tabele',
        children: [
          {
            displayName: 'Tabela - podstawowa',
            link: ShowcaseRouting.tableBasic,
          },
          {
            displayName: 'Tabela - rozwijane wiersze',
            link: ShowcaseRouting.tableCollapse,
          }
        ],
      },
      {
        displayName: 'Przyciski',
        link: ShowcaseRouting.buttons,
      }
    ]
  }
]
