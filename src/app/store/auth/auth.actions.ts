import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ILoginRequest, ILoginResponse, IRegisterRequest } from '@store/auth/interfaces';
import { IBasicResponse } from '@shared/utils/interfaces/http';
import { IBasicErrorResponse } from '@shared/utils/interfaces';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: IRegisterRequest }>(),
    'Register Success': props<{ response: IBasicResponse }>(),
    'Register Failure': props<{ error: IBasicErrorResponse }>(),

    Login: props<{ request: ILoginRequest }>(),
    'Login Success': props<{ response: ILoginResponse }>(),
    'Login Failure': props<{ error: IBasicErrorResponse }>(),

    Clear: emptyProps()
  }
});
