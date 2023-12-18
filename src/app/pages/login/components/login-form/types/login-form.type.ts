import { FormControl, FormGroup } from '@angular/forms';

export type LoginType = {
  email: string;
  password: string;
}

export type LoginFormGroupType = FormGroup<{
  email: FormControl<LoginType['email']>;
  password: FormControl<LoginType['password']>;
}>;

export type LoginFormControlType = LoginFormGroupType['controls'];
