import { ShowcaseRouting } from './showcase-routing.enum';

export interface ShowcaseTreeFlatNode {
  expandable: boolean;
  displayName: string;
  link: ShowcaseRouting;
  level: number;
}
