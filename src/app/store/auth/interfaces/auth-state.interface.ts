import { IUser } from '@store/auth/interfaces';
import { IBasicErrorResponse } from '@shared/utils/interfaces';

export interface ITokens {
  accessToken: string | null;
}

export interface IAuthState {
  loading: boolean;
  success: boolean;
  error: IBasicErrorResponse | null;
  user: IUser | null;
  tokens: ITokens | null;
  isLogged: boolean;
}
