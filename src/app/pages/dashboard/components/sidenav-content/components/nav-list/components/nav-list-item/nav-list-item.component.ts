import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SidenavItemType } from '../../../../types';
import { DashboardRouting } from '@pages/dashboard/utils';
import { environment } from '@environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrl: './nav-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatListModule, RouterLinkActive, RouterLink, MatIconModule]
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
