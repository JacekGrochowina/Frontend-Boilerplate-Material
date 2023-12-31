import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { SettingsService } from '@store/settings/settings.service';
import { settingsActions } from '@store/settings/settings.actions';
import { tap } from 'rxjs';

export const toggleThemeModeEffect = createEffect((
  actions$ = inject(Actions),
  settingsService = inject(SettingsService)
) => {
  return actions$.pipe(
    ofType(settingsActions.toggleThemeMode),
    tap(() => settingsService.toggleThemeMode())
  );
}, { functional: true, dispatch: false });
