import { ILoginResponse } from '@store/auth/interfaces';
import { IBasicErrorResponse } from '@shared/utils/interfaces';

export interface ICurrentUser extends ILoginResponse {}

export interface IAuthState {
  loading: boolean;
  success: boolean;
  error: IBasicErrorResponse | null;
  currentUser: ICurrentUser | null;
}
