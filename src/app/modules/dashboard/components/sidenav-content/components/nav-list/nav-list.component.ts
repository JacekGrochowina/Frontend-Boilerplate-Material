import { Component } from '@angular/core';
import { SidenavItemType } from "../../types/sidenav-item.type";
import { DashboardRouting } from "../../../../utils/dashboard-routing.enum";

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {

  protected sidenavList: SidenavItemType[] = [
    {
      name: 'Domowa',
      icon: 'home',
      path: DashboardRouting.home,
    },
  ];

}
