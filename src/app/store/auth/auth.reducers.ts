import { createFeature, createReducer, on } from '@ngrx/store';

import { IAuthState } from '@store/auth/interfaces/auth-state.interface';
import { authActions } from '@store/auth/auth.actions';

const initialState: IAuthState = {
  loading: false,
  success: false,
  error: null,
  currentUser: null
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
      loading: true,
      success: false,
      error: null
    })),
    on(authActions.registerSuccess, (state) => ({
      ...state,
      loading: false,
      success: true
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      loading: false,
      success: false,
      error: action.error
    })),

    // Login
    on(authActions.login, (state) => ({
      ...state,
      loading: true,
      success: false,
      error: null,
      currentUser: null
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      loading: false,
      success: true,
      currentUser: action.response
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      loading: false,
      success: false,
      error: action.error
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
  selectCurrentUser
} = authFeature;
