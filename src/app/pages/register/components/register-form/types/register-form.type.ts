import { FormControl, FormGroup } from '@angular/forms';

export type RegisterType = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegisterFormGroupType = FormGroup<{
  name: FormControl<RegisterType['name']>;
  surname: FormControl<RegisterType['surname']>;
  email: FormControl<RegisterType['email']>;
  password: FormControl<RegisterType['password']>;
  confirmPassword: FormControl<RegisterType['confirmPassword']>;
}>;

export type RegisterFormControlType = RegisterFormGroupType['controls'];
