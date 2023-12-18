import { ShowcaseRouting } from '@pages/dashboard/pages/showcase/utils/showcase-routing.enum';

export interface IShowcaseTreeFlatNode {
  expandable: boolean;
  displayName: string;
  link: ShowcaseRouting;
  level: number;
}
