import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  protected get avatarInitials(): string {
    return 'JK';
  }

  protected get userName(): string {
    return 'Jan';
  }

  protected get userSurname(): string {
    return 'Kowalski';
  }

  protected get userEmail(): string {
    return 'jan.kowalski@gmail.com';
  }

  // protected contextMenuList: ContextMenuItemType[] = [
  //   {
  //     name: 'Ustawienia',
  //     icon: 'settings',
  //     action: () => this.contextMenuActions.settings(),
  //   },
  //   {
  //     name: 'Wygoluj się',
  //     icon: 'logout',
  //     action: () => this.contextMenuActions.logout(),
  //   }
  // ];
  //
  // private contextMenuActions = {
  //   settings: () => console.log('settings'),
  //   logout: () => console.log('logout'),
  // }

}
