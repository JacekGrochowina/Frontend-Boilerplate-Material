import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAppState } from '@store/app.state';
import { settingsActions } from '@store/settings/settings.actions';
import { selectThemeMode } from '@store/settings/settings.reducers';

@Injectable({
  providedIn: 'root'
})
export class SettingsFacade {
  public themeMode$ = this.store.select(selectThemeMode);

  public get isLightMode$(): Observable<boolean> {
    return this.themeMode$.pipe(
      map((themeMode) => themeMode === 'light')
    );
  }

  constructor(private store: Store<IAppState>) {}

  public toggleThemeMode(): void {
    this.store.dispatch(settingsActions.toggleThemeMode());
  }
}
