import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContextMenuItemType } from "./types";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule]
})
export class ContextMenuComponent {

  protected contextMenuList: ContextMenuItemType[] = [
    {
      name: 'Ustawienia',
      icon: 'settings',
      action: () => this.contextMenuActions.settings(),
    },
    {
      name: 'Wyloguj się',
      icon: 'logout',
      action: () => this.contextMenuActions.logout(),
    }
  ];

  private contextMenuActions = {
    settings: () => console.log('settings'),
    logout: () => console.log('logout'),
  }
}
