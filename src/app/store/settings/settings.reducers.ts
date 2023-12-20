import { createFeature, createReducer, on } from '@ngrx/store';

import { ISettingsState } from '@store/settings/interfaces/settings-state.interface';
import { settingsActions } from '@store/settings/settings.actions';
import { ThemeModeType } from '@shared/utils/types/theme-mode.type';

const initialState: ISettingsState = {
  themeMode: 'light'
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,

    on(settingsActions.toggleThemeMode, (state) => ({
      ...state,
      themeMode: (state.themeMode === 'light' ? 'dark' : 'light') as ThemeModeType
    }))
  )
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,

  // Selectors
  selectThemeMode
} = settingsFeature;
