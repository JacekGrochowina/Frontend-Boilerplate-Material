import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SettingsFacade } from '@store/settings/settings.facade';

@Component({
  selector: 'app-theme-mode-toggler',
  templateUrl: './theme-mode-toggler.component.html',
  styleUrl: './theme-mode-toggler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class ThemeModeTogglerComponent {
  protected isLightMode$ = this.settingsFacade.isLightMode$;

  constructor(private settingsFacade: SettingsFacade) {}

  protected toggleThemeMode(): void {
    this.settingsFacade.toggleThemeMode();
  }
}
