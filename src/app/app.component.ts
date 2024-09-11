import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SettingsFacade } from '@store/settings/settings.facade';
import { SettingsService } from '@store/settings/settings.service';
import { AuthService } from '@store/auth/auth.service';
import { AuthFacade } from '@store/auth/auth.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe]
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<boolean>();
  private themeMode$ = this.settingsFacade.themeMode$;
  protected isLightMode$ = this.settingsFacade.isLightMode$;

  constructor(
    private settingsFacade: SettingsFacade,
    private authFacade: AuthFacade,
    private authService: AuthService,
    private settingsService: SettingsService
  ) {}

  public ngOnInit(): void {
    this.themeMode$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((themeMode) => {
        this.settingsService.changeDialogsThemeMode(themeMode);
      });

    // this.authService.checkJwtAccessToken();
    this.authFacade.checkJwtAccessToken();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}
