import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeModeType } from '@shared/utils/types/theme-mode.type';
import { SettingsFacade } from '@store/settings/settings.facade';
import { take } from 'rxjs';

export const getInitialThemeMode = (): ThemeModeType => {
  return localStorage.getItem('themeMode') as ThemeModeType ?? 'light';
};

export const toggleThemeMode = (themeMode: ThemeModeType): ThemeModeType => {
  return (themeMode === 'light' ? 'dark' : 'light') as ThemeModeType;
};

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private themeMode$ = this.settingsFacade.themeMode$;

  constructor(
    private settingsFacade: SettingsFacade,
    private overlayContainer: OverlayContainer
  ) {}

  public toggleThemeMode(): void {
    this.themeMode$
      .pipe(take(1))
      .subscribe((themeMode) => {
        localStorage.setItem('themeMode', themeMode);
      });
  }

  public changeDialogsThemeMode(themeMode: ThemeModeType): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses)
      .filter((item: string) => item.includes('-theme'));

    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }

    overlayContainerClasses.add(`${themeMode}-theme`);
  }
}
