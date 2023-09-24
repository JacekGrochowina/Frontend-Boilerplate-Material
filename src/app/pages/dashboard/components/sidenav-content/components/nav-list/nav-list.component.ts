import { Component } from '@angular/core';
import { DashboardRouting } from "../../../../utils";
import { SidenavItemType } from "../../types";

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {

  protected navList: SidenavItemType[] = [
    {
      name: 'Domowa',
      icon: 'home',
      path: DashboardRouting.home,
    },
    {
      name: 'Ustawienia',
      icon: 'settings',
      path: DashboardRouting.settings,
    },
    {
      name: 'Przykłady (dev)',
      icon: 'construction',
      path: DashboardRouting.showcase,
      isHiddenOnProduction: true,
    },
  ];

}
