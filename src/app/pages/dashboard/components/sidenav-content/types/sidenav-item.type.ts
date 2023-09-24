import { DashboardRouting } from "../../../utils";

export type SidenavItemType = {
  name: string;
  icon: string;
  path: DashboardRouting;
  isHiddenOnProduction?: boolean;
}
