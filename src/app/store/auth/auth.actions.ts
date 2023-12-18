import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IRegisterRequest } from '@store/auth/interfaces/register-request.interface';
import { IBasicResponse } from '@shared/utils/interfaces/http/basic-response.interface';
import { IBasicErrorResponse } from '@shared/utils/interfaces/http/basic-error-response.interface';
import { ILoginRequest } from '@store/auth/interfaces/login-request.interface';
import { ILoginResponse } from '@store/auth/interfaces/login-response.interface';

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
