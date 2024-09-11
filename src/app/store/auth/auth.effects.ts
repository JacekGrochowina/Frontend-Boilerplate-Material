import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, of, switchMap, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNull } from 'lodash';

import { AppRouting } from '@app/utils';
import { DashboardRouting } from '@pages/dashboard/utils';
import { AuthService } from '@store/auth/auth.service';
import { authActions } from '@store/auth/auth.actions';
import { IBasicErrorResponse } from '@shared/utils/interfaces';
import { ILoginResponse, IRegisterResponse, IUserResponse } from '@store/auth/interfaces';

export const registerEffect = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.register),
    switchMap(({ request }) => {
      return authService.register(request).pipe(
        map((response: IRegisterResponse) => authActions.registerSuccess({ response, password: request.password })),
        catchError((error: IBasicErrorResponse) => of(authActions.registerFailure({ error })))
      );
    })
  );
}, { functional: true });

export const registerSuccessEffect = createEffect((
  actions$ = inject(Actions),
  store = inject(Store)
) => {
  return actions$.pipe(
    ofType(authActions.registerSuccess),
    tap(({ response, password }) => {
      store.dispatch(authActions.login({ request: { email: response.email, password } }));
    })
  );
}, { functional: true, dispatch: false });

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

export const loginSuccessEffect = createEffect((
  actions$ = inject(Actions),
  store = inject(Store),
  router = inject(Router)
) => {
  return actions$.pipe(
    ofType(authActions.loginSuccess),
    switchMap(({ response }) => {
      const accessToken = response.accessToken;
      store.dispatch(authActions.setJwtAccessToken({ accessToken }));
      router.navigate([`/${AppRouting.dashboard}/${DashboardRouting.home}`]);
      return EMPTY;
    })
  );
}, { functional: true, dispatch: false });

export const logoutEffect = createEffect((
  actions$ = inject(Actions),
  store = inject(Store),
  router = inject(Router),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.logout),
    switchMap(() => {
      authService.clearJwtAccessToken();
      store.dispatch(authActions.clear());
      router.navigate([`/${AppRouting.start}`]);
      return EMPTY;
    })
  );
}, { functional: true, dispatch: false });

export const setJwtAccessTokenEffect = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.setJwtAccessToken),
    switchMap(({ accessToken }) => {
      authService.setJwtAccessToken(accessToken);
      return of(authActions.getUser());
    })
  );
}, { functional: true });

export const checkJwtAccessTokenEffect = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService),
  store = inject(Store)
) => {
  return actions$.pipe(
    ofType(authActions.checkJwtAccessToken),
    switchMap(() => {
      const accessToken = authService.getJwtAccessToken();
      if (isNull(accessToken)) return EMPTY;
      store.dispatch(authActions.setJwtAccessToken({ accessToken }));
      return EMPTY;
    })
  );
}, { functional: true, dispatch: false });

export const getCurrentUserEffect = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.getUser),
    switchMap(() => {
      return authService.getCurrentUser().pipe(
        map((response: IUserResponse) => authActions.getUserSuccess({ response })),
        catchError((error: IBasicErrorResponse) => of(authActions.getUserFailure({ error })))
      );
    })
  );
}, { functional: true });
