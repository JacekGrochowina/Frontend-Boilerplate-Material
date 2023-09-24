import { FormControl, FormGroup } from "@angular/forms";

export type RegisterType = {
  name: string | null;
  surname: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

export type RegisterFormGroupType = FormGroup<{
  name: FormControl<RegisterType['name']>;
  surname: FormControl<RegisterType['surname']>;
  email: FormControl<RegisterType['email']>;
  password: FormControl<RegisterType['password']>;
  confirmPassword: FormControl<RegisterType['confirmPassword']>;
}>;

export type RegisterFormControlType = RegisterFormGroupType['controls'];
