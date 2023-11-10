import { Component, Input } from '@angular/core';
import { SidenavItemType } from '../../../../types';
import { DashboardRouting } from '../../../../../../utils';
import { environment } from '../../../../../../../../../environments/environment';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss']
})
export class NavListItemComponent {

  @Input() sidenavItem!: SidenavItemType;

  protected get name(): SidenavItemType['name'] {
    return this.sidenavItem.name;
  }

  protected get icon(): SidenavItemType['icon'] {
    return this.sidenavItem.icon;
  }

  protected get path(): SidenavItemType['path'] {
    return this.sidenavItem.path;
  }

  protected get isHiddenOnProduction(): SidenavItemType['isHiddenOnProduction'] {
    return this.sidenavItem.isHiddenOnProduction;
  }

  protected get isVisibleOnProduction(): boolean {
    return !environment.production || !this.isHiddenOnProduction;
  }

  protected getIsHomePage(sidenavItem: SidenavItemType): boolean {
    return sidenavItem.path === DashboardRouting.home;
  }
}