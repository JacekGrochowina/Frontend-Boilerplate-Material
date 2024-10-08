import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '@store/app.state';
import { ILoginRequest, IRegisterRequest } from '@store/auth/interfaces';
import { authActions } from '@store/auth/auth.actions';
import {
  selectError,
  selectIsLogged,
  selectLoading,
  selectSuccess,
  selectTokens,
  selectUser
} from '@store/auth/auth.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  public loading$ = this.store.select(selectLoading);
  public success$ = this.store.select(selectSuccess);
  public error$ = this.store.select(selectError);
  public user$ = this.store.select(selectUser);
  public tokens$ = this.store.select(selectTokens);
  public isLogged$ = this.store.select(selectIsLogged);

  constructor(private store: Store<IAppState>) {}

  public clear(): void {
    this.store.dispatch(authActions.clear());
  }

  public register(request: IRegisterRequest): void {
    this.store.dispatch(authActions.register({ request }));
  }

  public login(request: ILoginRequest): void {
    this.store.dispatch(authActions.login({ request }));
  }

  public logout(): void {
    this.store.dispatch(authActions.logout());
  }

  public checkJwtAccessToken(): void {
    this.store.dispatch(authActions.checkJwtAccessToken());
  }
}
