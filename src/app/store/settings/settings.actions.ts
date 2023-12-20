import { createActionGroup, emptyProps } from '@ngrx/store';

export const settingsActions = createActionGroup({
  source: 'settings',
  events: {
    toggleThemeMode: emptyProps()
  }
});
