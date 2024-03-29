import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ThemeModeTogglerComponent
} from '@pages/dashboard/components/toolbar/components/theme-mode-toggler/theme-mode-toggler.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, UserDetailsComponent, ContextMenuComponent, ThemeModeTogglerComponent]
})
export class ToolbarComponent {

  @Input() drawerRef!: MatDrawer;

  protected onMenuClick(): void {
    this.drawerRef.toggle();
  }
}
