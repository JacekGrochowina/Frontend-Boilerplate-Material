import { ShowcaseRouting } from './showcase-routing.enum';

export interface ShowcaseTreeNode {
  displayName: string;
  link?: ShowcaseRouting;
  children?: ShowcaseTreeNode[];
}
