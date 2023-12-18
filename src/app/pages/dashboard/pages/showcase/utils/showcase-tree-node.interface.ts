import { ShowcaseRouting } from '@pages/dashboard/pages/showcase/utils/showcase-routing.enum';

export interface IShowcaseTreeNode {
  displayName: string;
  link?: ShowcaseRouting;
  children?: IShowcaseTreeNode[];
}
