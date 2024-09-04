import { FormControl, FormGroup } from '@angular/forms';

export type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegisterFormGroupType = FormGroup<{
  firstName: FormControl<RegisterType['firstName']>;
  lastName: FormControl<RegisterType['lastName']>;
  email: FormControl<RegisterType['email']>;
  password: FormControl<RegisterType['password']>;
  confirmPassword: FormControl<RegisterType['confirmPassword']>;
}>;

export type RegisterFormControlType = RegisterFormGroupType['controls'];
