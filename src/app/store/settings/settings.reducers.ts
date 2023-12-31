import { createFeature, createReducer, on } from '@ngrx/store';

import { ISettingsState } from '@store/settings/interfaces/settings-state.interface';
import { settingsActions } from '@store/settings/settings.actions';
import { getInitialThemeMode, toggleThemeMode } from '@store/settings/settings.service';

const initialState: ISettingsState = {
  themeMode: getInitialThemeMode()
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,

    on(settingsActions.toggleThemeMode, (state) => ({
      ...state,
      themeMode: toggleThemeMode(state.themeMode)
    }))
  )
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,

  // Selectors
  selectThemeMode
} = settingsFeature;
