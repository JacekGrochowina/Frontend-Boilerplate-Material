import { IAuthState } from '@store/auth/interfaces/auth-state.interface';
import { ISettingsState } from '@store/settings/interfaces/settings-state.interface';

export interface IAppState {
  auth: IAuthState;
  settings: ISettingsState;
}
