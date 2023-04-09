import { Component } from '@angular/core';
import { ContextMenuItemType } from "./types";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {

  protected contextMenuList: ContextMenuItemType[] = [
    {
      name: 'Ustawienia',
      icon: 'settings',
      action: () => this.contextMenuActions.settings(),
    },
    {
      name: 'Wygoluj się',
      icon: 'logout',
      action: () => this.contextMenuActions.logout(),
    }
  ];

  private contextMenuActions = {
    settings: () => console.log('settings'),
    logout: () => console.log('logout'),
  }
}
