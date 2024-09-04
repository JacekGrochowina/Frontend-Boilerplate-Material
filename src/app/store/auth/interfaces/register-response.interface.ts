import { ILoginResponse } from '@store/auth/interfaces';

export interface IRegisterResponse extends Omit<ILoginResponse, 'accessToken' | 'refreshToken'> {}
