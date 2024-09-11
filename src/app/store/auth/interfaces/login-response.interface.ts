import { IUser } from '@store/auth/interfaces/user.interface';

export interface ILoginResponse extends IUser {
  accessToken: string;
  refreshToken: string;
}
