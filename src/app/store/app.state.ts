import { IAuthState } from '@store/auth/interfaces';
import { ISettingsState } from '@store/settings/interfaces';

export interface IAppState {
  auth: IAuthState;
  settings: ISettingsState;
}
