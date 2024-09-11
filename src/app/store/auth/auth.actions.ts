import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '@store/auth/interfaces';
import { IBasicErrorResponse } from '@shared/utils/interfaces';
import { IUserResponse } from '@store/auth/interfaces/user-response.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Clear: emptyProps(),

    Register: props<{ request: IRegisterRequest }>(),
    'Register Success': props<{ response: IRegisterResponse, password: string }>(),
    'Register Failure': props<{ error: IBasicErrorResponse }>(),

    Login: props<{ request: ILoginRequest }>(),
    'Login Success': props<{ response: ILoginResponse }>(),
    'Login Failure': props<{ error: IBasicErrorResponse }>(),

    Logout: emptyProps(),

    SetJwtAccessToken: props<{ accessToken: string }>(),
    CheckJwtAccessToken: emptyProps(),

    GetUser: emptyProps(),
    'Get User Success': props<{ response: IUserResponse }>(),
    'Get User Failure': props<{ error: IBasicErrorResponse }>()
  }
});
