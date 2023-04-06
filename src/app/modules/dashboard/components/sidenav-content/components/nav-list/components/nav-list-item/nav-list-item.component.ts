import { Component, Input } from '@angular/core';
import { SidenavItemType } from "../../../../types/sidenav-item.type";
import { DashboardRouting } from "../../../../../../utils/dashboard-routing.enum";

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss']
})
export class NavListItemComponent {

  @Input() sidenavItem!: SidenavItemType;

  protected get name(): string {
    return this.sidenavItem.name;
  }

  protected get icon(): string {
    return this.sidenavItem.icon;
  }

  protected get path(): DashboardRouting {
    return this.sidenavItem.path;
  }

  protected getIsHomePage(sidenavItem: SidenavItemType): boolean {
    return sidenavItem.path === DashboardRouting.home;
  }
}
