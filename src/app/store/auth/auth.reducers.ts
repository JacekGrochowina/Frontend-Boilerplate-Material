import { createFeature, createReducer, on } from '@ngrx/store';

import { IAuthState } from '@store/auth/interfaces/auth-state.interface';
import { authActions } from '@store/auth/auth.actions';
import { InitialLoadingHandler } from '@shared/utils/models';
import { ReducersCommonStates } from '@store/_common';

const initialState: IAuthState = {
  ...InitialLoadingHandler,
  user: null,
  tokens: null
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    on(authActions.clear, (state) => ({
      ...state,
      ...initialState
    })),

    // Register
    on(authActions.register, (state) => ({
      ...state,
      ...ReducersCommonStates.loading()
    })),
    on(authActions.registerSuccess, (state) => ({
      ...state,
      ...ReducersCommonStates.success()
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      ...ReducersCommonStates.error(action.error)
    })),

    // Login
    on(authActions.login, (state) => ({
      ...state,
      ...ReducersCommonStates.loading(),
      user: null,
      tokens: null
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      ...ReducersCommonStates.success(),
      tokens: {
        ...state.tokens,
        accessToken: action.response.accessToken
      }
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      ...ReducersCommonStates.error(action.error)
    })),

    // Access Token
    on(authActions.setJwtAccessToken, (state, action) => ({
      ...state,
      tokens: {
        ...state.tokens,
        accessToken: action.accessToken
      }
    })),

    // User
    on(authActions.getUser, (state) => ({
      ...state,
      ...ReducersCommonStates.loading(),
      user: null
    })),
    on(authActions.getUserSuccess, (state, action) => ({
      ...state,
      ...ReducersCommonStates.success(),
      user: action.response
    })),
    on(authActions.getUserFailure, (state, action) => ({
      ...state,
      ...ReducersCommonStates.error(action.error)
    }))
  )
});

export const {
  name: authFeatureKey,
  reducer: authReducer,

  // Selectors
  selectLoading,
  selectSuccess,
  selectError,
  selectUser,
  selectTokens
} = authFeature;
