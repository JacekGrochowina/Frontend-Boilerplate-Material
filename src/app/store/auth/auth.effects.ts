import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, from, of, switchMap, tap } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@store/auth/auth.service';
import { authActions } from '@store/auth/auth.actions';
import { IBasicErrorResponse } from '@shared/utils/interfaces';
import { ILoginResponse, IRegisterResponse } from '@store/auth/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardRouting } from '@pages/dashboard/utils';
import { AppRouting } from '@app/utils';
import { Store } from '@ngrx/store';

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
  router = inject(Router),
  route = inject(ActivatedRoute)
) => {
  return actions$.pipe(
    ofType(authActions.loginSuccess),
    switchMap(({ response }) => {
      return from(router.navigate([`./${AppRouting.dashboard}/${DashboardRouting.home}`], {
        relativeTo: route.parent
      }));
    })
  );
}, { functional: true, dispatch: false });
