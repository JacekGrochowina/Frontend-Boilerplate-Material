import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@store/auth/auth.service';
import { authActions } from '@store/auth/auth.actions';
import { IBasicResponse } from '@shared/utils/interfaces/http/basic-response.interface';
import { IBasicErrorResponse } from '@shared/utils/interfaces/http/basic-error-response.interface';
import { ILoginResponse } from '@store/auth/interfaces/login-response.interface';

export const registerEffect = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.register),
    switchMap(({ request }) => {
      return authService.register(request).pipe(
        map((response: IBasicResponse) => authActions.registerSuccess({ response })),
        catchError((error: IBasicErrorResponse) => of(authActions.registerFailure({ error })))
      );
    })
  );
}, { functional: true });

export const loginEffect = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.login),
    switchMap(({ request }) => {
      return authService.login(request).pipe(
        map((response: ILoginResponse) => authActions.loginSuccess({ response })),
        catchError((error: IBasicErrorResponse) => of(authActions.loginFailure({ error })))
      );
    })
  );
}, { functional: true });
