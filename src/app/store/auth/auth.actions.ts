import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '@store/auth/interfaces';
import { IBasicErrorResponse } from '@shared/utils/interfaces';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: IRegisterRequest }>(),
    'Register Success': props<{ response: IRegisterResponse, password: string }>(),
    'Register Failure': props<{ error: IBasicErrorResponse }>(),

    Login: props<{ request: ILoginRequest }>(),
    'Login Success': props<{ response: ILoginResponse }>(),
    'Login Failure': props<{ error: IBasicErrorResponse }>(),

    Clear: emptyProps()
  }
});
