import { ILoginResponse } from '@store/auth/interfaces/login-response.interface';
import { IBasicErrorResponse } from '@shared/utils/interfaces/http/basic-error-response.interface';

export interface ICurrentUser extends ILoginResponse {}

export interface IAuthState {
  loading: boolean;
  success: boolean;
  error: IBasicErrorResponse | null;
  currentUser: ICurrentUser | null;
}
