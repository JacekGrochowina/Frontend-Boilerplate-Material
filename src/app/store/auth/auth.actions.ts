import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '@store/auth/interfaces';
import { IBasicErrorResponse } from '@shared/utils/interfaces';
import { ICurrentUserResponse } from '@store/auth/interfaces/current-user-response.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: IRegisterRequest }>(),
    'Register Success': props<{ response: IRegisterResponse, password: string }>(),
    'Register Failure': props<{ error: IBasicErrorResponse }>(),

    Login: props<{ request: ILoginRequest }>(),
    'Login Success': props<{ response: ILoginResponse }>(),
    'Login Failure': props<{ error: IBasicErrorResponse }>(),

    Clear: emptyProps(),

    setJwtAccessToken: props<{ accessToken: string }>(),
    checkJwtAccessToken: emptyProps(),

    CurrentUser: emptyProps(),
    'Get Current User Success': props<{ response: ICurrentUserResponse }>(),
    'Get Current User Failure': props<{ error: IBasicErrorResponse }>()
  }
});
