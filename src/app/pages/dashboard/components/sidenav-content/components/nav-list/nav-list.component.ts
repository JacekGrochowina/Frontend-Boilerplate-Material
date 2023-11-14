import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardRouting } from "../../../../utils";
import { SidenavItemType } from "../../types";
import { NavListItemComponent } from './components/nav-list-item/nav-list-item.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatListModule, NavListItemComponent]
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
