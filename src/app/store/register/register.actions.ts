import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from './interfaces/register-request.interface';

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);
